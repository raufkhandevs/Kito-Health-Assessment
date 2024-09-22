import config from '@/config';

import { getErrorMessage } from '@/helpers';
import { QuestionnaireService } from '@/services';
import { QuestionnaireValidator } from '@/validator';
import { Request, Response } from 'express';
import { head, isEmpty } from 'lodash';
import { StatusCodes } from 'http-status-codes';

/**
 * Fetch all questionnaires
 *
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<Response | void>}
 */
export const index = async (
  req: Request,
  res: Response,
): Promise<Response | void> => {
  const page = parseInt(req.query.page as string) || 1;
  const perPage =
    parseInt(req.query.perPage as string) || config.questionnairePerPage;

  try {
    const questionnaires = await QuestionnaireService.fetchAll(page, perPage);
    res.status(StatusCodes.OK).json(questionnaires);
  } catch (error) {
    console.error('Error fetching questionnaires:', error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: getErrorMessage(error, 'Failed to fetch questionnaires'),
    });
  }
};

/**
 * Create a questionnaire
 *
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {Response | void}
 */
export const create = async (
  req: Request,
  res: Response,
): Promise<Response | void> => {
  const payload = req.body;

  const { error } =
    QuestionnaireValidator.questionnaireSchema.validate(payload);
  if (!isEmpty(error)) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: head(error.details)?.message });
  }

  try {
    const questionnaire = await QuestionnaireService.create(payload);
    res.status(StatusCodes.CREATED).json(questionnaire);
  } catch (error) {
    console.error('Error creating questionnaire:', error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: getErrorMessage(error, 'Failed to create questionnaires.'),
    });
  }
};

/**
 * Show questionnaire
 *
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<Response | void>}
 */
export const show = async (
  req: Request,
  res: Response,
): Promise<Response | void> => {
  const { id } = req.params;

  try {
    const questionnaire = await QuestionnaireService.find(id);

    if (!questionnaire) {
      return res.status(404).json({ message: 'Questionnaire not found' });
    }

    res.status(200).json(questionnaire);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: getErrorMessage(
        error,
        `Failed to fetch questionnaire for _id=${id}`,
      ),
    });
  }
};

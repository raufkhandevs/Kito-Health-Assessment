import config from '@/config';
import mongoose from 'mongoose';

import { Questionnaire } from '@/models';
import { IDBQuestionnaire } from '@/types';

/**
 * Fetch all questionnaires
 *
 * @async
 * @param {number} [page=1]
 * @param {number} [perPage=10]
 * @returns {Promise<IDBQuestionnaire[]>}
 */
export const fetchAll = async (
  page: number = 1,
  perPage: number = config.questionnairePerPage,
): Promise<IDBQuestionnaire[]> => {
  const skip = (page - 1) * perPage;
  return await Questionnaire.find().skip(skip).limit(perPage).exec();
};

/**
 * Create a questionnaire
 *
 * @async
 * @param {*} payload
 * @returns {Promise<IDBQuestionnaire>}
 */
export const create = async (
  payload: IDBQuestionnaire,
): Promise<IDBQuestionnaire> => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const questionnaire = new Questionnaire(payload);
    const savedQuestionnaire = await questionnaire.save({ session });

    await session.commitTransaction();
    return savedQuestionnaire;
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
};

/**
 * Find questionnaire by id
 *
 * @async
 * @param {string} id
 * @returns {Promise<IDBQuestionnaire | null>}
 */
export const find = async (id: string): Promise<IDBQuestionnaire | null> => {
  return await Questionnaire.findById(id).exec();
};

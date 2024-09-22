import Joi from 'joi';
import { questionSchema } from './question';

/**
 * Questionnaire schema
 *
 * @type {*}
 */
export const questionnaireSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  questions: Joi.array().items(questionSchema).min(1).required(),
});

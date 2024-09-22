import Joi from 'joi';
import { answerSchema } from './answer';

/**
 * Question schema
 *
 * @type {*}
 */
export const questionSchema = Joi.object({
  text: Joi.string().required(),
  answers: Joi.array().items(answerSchema).min(2).required(),
});

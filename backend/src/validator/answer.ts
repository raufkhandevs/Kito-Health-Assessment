import { AnswerWeightEnum } from '@/types';
import Joi from 'joi';

/**
 * Answer schema
 *
 * @type {*}
 */
export const answerSchema = Joi.object({
  text: Joi.string().required(),
  weight: Joi.number()
    .valid(...Object.values(AnswerWeightEnum))
    .required(),
  isCorrect: Joi.boolean().required(),
});

import { IDBQuestionnaire } from '@/types';
import mongoose, { Schema } from 'mongoose';
import { questionSchema } from './questions';

/**
 * Questionnaire schema
 *
 * @type {Schema<IDBQuestionnaire>}
 */
export const questionnaireSchema: Schema<IDBQuestionnaire> = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  //   questions: [{ type: Schema.Types.ObjectId, ref: 'Question', required: true }],
  questions: { type: [questionSchema], required: true },
});

/**
 * Questionnaire model
 *
 * @type {*}
 */
export const Questionnaire = mongoose.model<IDBQuestionnaire>(
  'Questionnaire',
  questionnaireSchema,
);

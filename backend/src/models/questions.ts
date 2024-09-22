import { IDBQuestion } from '@/types';
import mongoose, { Schema } from 'mongoose';
import { answerSchema } from './answer';

/**
 * Question schema
 *
 * @type {Schema<IDBQuestion>}
 */
export const questionSchema: Schema<IDBQuestion> = new Schema({
  text: { type: String, required: true },
  // answers: [{ type: Schema.Types.ObjectId, ref: 'Answer', required: true }],
  answers: { type: [answerSchema], required: true },
});

/**
 * Question model
 *
 * @type {*}
 */
export const Question = mongoose.model<IDBQuestion>('Question', questionSchema);

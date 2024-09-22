import { IDBAnswer } from '@/types';
import mongoose, { Schema } from 'mongoose';

/**
 * Answer schema
 *
 * @type {Schema<IDBAnswer>}
 */
export const answerSchema: Schema<IDBAnswer> = new Schema({
  text: { type: String, required: true },
  weight: {
    type: Number,
    required: true,
    enum: [1, 2, 3],
  },
  isCorrect: { type: Boolean, required: true },
});

/**
 * Answer model
 *
 * @type {*}
 */
export const Answer = mongoose.model<IDBAnswer>('Answer', answerSchema);

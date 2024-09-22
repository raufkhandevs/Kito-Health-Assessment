import { Document } from 'mongoose';

/**
 * Answer model interface
 *
 * @export
 * @interface IDBAnswer
 * @typedef {IDBAnswer}
 * @extends {Document}
 */
export interface IDBAnswer extends Document {
  text: string;
  weight: 1 | 2 | 3;
  isCorrect: boolean;
}

/**
 * Question model interface
 *
 * @export
 * @interface IDBQuestion
 * @typedef {IDBQuestion}
 * @extends {Document}
 */
export interface IDBQuestion extends Document {
  text: string;
  answers: IDBAnswer[];
}

/**
 * Questionnaire model interface
 *
 * @export
 * @interface IDBQuestionnaire
 * @typedef {IDBQuestionnaire}
 * @extends {Document}
 */
export interface IDBQuestionnaire extends Document {
  title: string;
  description: string;
  questions: IDBQuestion[];
}

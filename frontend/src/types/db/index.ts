export interface IDBAnswer {
  _id: string;
  text: string;
  weight: number;
  isCorrect: boolean;
}

export interface IDBQuestion {
  _id: string;
  text: string;
  answers: IDBAnswer[];
}

export interface IDBQuestionnaire {
  _id: string;
  title: string;
  description: string;
  questions: IDBQuestion[];
}

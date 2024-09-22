import { IDBQuestionnaire } from '@/types';
import { allowLogs } from '../utils';
import axios from 'axios';
import { omit } from 'lodash';

const backendBaseUrl = `${
  process.env.NEXT_PUBLIC_BACKEND_BASE_URL || 'http://localhost:3001'
}/api`;

export const createQuestionnaireApi = async (
  payload: Partial<IDBQuestionnaire>
) => {
  if (allowLogs()) {
    console.log('createQuestionnaireApi()');
  }

  // Remove _id from the parent, questions, and answers
  const sanitizedPayload = {
    ...omit(payload, ['_id']),
    questions: payload.questions?.map((question) => ({
      ...omit(question, ['_id']),
      answers: question.answers?.map((answer) => omit(answer, ['_id'])),
    })),
  };

  return await axios.post<IDBQuestionnaire>(`${backendBaseUrl}/questionnaire`, {
    ...sanitizedPayload,
  });
};

export const showQuestionnaireApi = async (id: string) => {
  if (allowLogs()) {
    console.log('showQuestionnaireApi()');
  }

  return await axios.get<IDBQuestionnaire>(
    `${backendBaseUrl}/questionnaire/${id}`
  );
};

export const fetchAllQuestionnairesApi = async (
  page: number,
  perPage: number
) => {
  if (allowLogs()) {
    console.log('fetchAllQuestionnairesApi()');
  }

  return await axios.get<IDBQuestionnaire[]>(
    `${backendBaseUrl}/questionnaire?page=${page}&perPage=${perPage}`
  );
};

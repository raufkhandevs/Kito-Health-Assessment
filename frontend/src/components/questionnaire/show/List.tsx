import { IDBQuestionnaire } from '@/types';
import React from 'react';
import QuestionList from './QuestionList';

const List = (props: {
  questionnaire: IDBQuestionnaire;
  showCorrectAnswers: boolean;
}) => {
  const { questionnaire, showCorrectAnswers } = props;
  return (
    <QuestionList
      questionnaire={questionnaire}
      showCorrectAnswers={showCorrectAnswers}
    />
  );
};

export default List;

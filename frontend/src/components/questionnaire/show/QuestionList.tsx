import { IDBQuestionnaire } from '@/types';
import React from 'react';
import AnswerList from './AnswerList';

const QuestionList = (props: {
  questionnaire: IDBQuestionnaire;
  showCorrectAnswers: boolean;
}) => {
  const { questionnaire, showCorrectAnswers } = props;
  return (
    <div className="space-y-6">
      {questionnaire.questions.map((question, questionIndex) => (
        <div
          key={questionIndex}
          className="p-4 bg-gray-100 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-semibold mb-2">{question.text}</h2>
          <AnswerList
            question={question}
            showCorrectAnswers={showCorrectAnswers}
          />
        </div>
      ))}
    </div>
  );
};

export default QuestionList;

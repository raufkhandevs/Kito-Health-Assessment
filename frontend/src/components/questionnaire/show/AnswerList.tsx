import { IDBQuestion } from '@/types';
import React from 'react';

const AnswerList = (props: {
  question: IDBQuestion;
  showCorrectAnswers: boolean;
}) => {
  const { question, showCorrectAnswers } = props;
  return (
    <ul className="space-y-2">
      {question.answers.map((answer, answerIndex) => (
        <li
          key={answerIndex}
          className={`p-2 rounded-md ${
            showCorrectAnswers && answer.isCorrect ? 'bg-green-200' : 'bg-white'
          }`}
        >
          {answer.text}
          {showCorrectAnswers && answer.isCorrect && (
            <span className="text-green-700 font-semibold"> (Correct)</span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default AnswerList;

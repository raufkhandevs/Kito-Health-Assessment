'use client';

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import { IDBAnswer, IDBQuestion } from '@/types';
import Button from '@/components/common/Button';
import { useRouter } from 'next/navigation';
import { createQuestionnaireApi } from '@/lib/apis/questionnaire';
import axios from 'axios';

// TODO: Add validation use useForm
// TODO: refactor
const CreateQuestionnaire = () => {
  const router = useRouter();
  const [questions, setQuestions] = useState<IDBQuestion[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Add a new question
  const addQuestion = () => {
    if (questions.length < 20) {
      setQuestions([...questions, { _id: uuidv4(), text: '', answers: [] }]);
    }
  };

  // Remove a question
  const removeQuestion = (id: string) => {
    setQuestions(questions.filter((q) => q._id !== id));
  };

  // Handle question text change
  const handleQuestionChange = (id: string, text: string) => {
    setQuestions(questions.map((q) => (q._id === id ? { ...q, text } : q)));
  };

  // Add a new answer to a specific question
  const addAnswer = (questionId: string) => {
    setQuestions(
      questions.map((q) => {
        if (q._id === questionId && q.answers.length < 5) {
          return {
            ...q,
            answers: [
              ...q.answers,
              { _id: uuidv4(), text: '', weight: 1, isCorrect: false },
            ],
          };
        }
        return q;
      })
    );
  };

  // Remove an answer from a specific question
  const removeAnswer = (questionId: string, answerId: string) => {
    setQuestions(
      questions.map((q) => {
        if (q._id === questionId) {
          return {
            ...q,
            answers: q.answers.filter((a) => a._id !== answerId),
          };
        }
        return q;
      })
    );
  };

  // Handle answer change
  const handleAnswerChange = (
    questionId: string,
    answerId: string,
    field: keyof IDBAnswer,
    value: string | number | boolean
  ) => {
    setQuestions(
      questions.map((q) => {
        if (q._id === questionId) {
          return {
            ...q,
            answers: q.answers.map((a) =>
              a._id === answerId ? { ...a, [field]: value } : a
            ),
          };
        }
        return q;
      })
    );
  };

  // Submit form data
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const questionnaire = {
      title,
      description,
      questions,
    };

    try {
      await createQuestionnaireApi(questionnaire);
      console.log('rauf after axios');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Now you can safely access error.response
        const errorMessage =
          error.response?.data.message || 'An unknown error occurred';
        console.error('Error message:', errorMessage);
        toast.error(errorMessage);
      } else {
        console.error('Unexpected error:', error);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold ">Create Questionnaire</h1>
        <Button
          text="Back"
          onClick={() => router.push('/')}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Description</label>
          <textarea
            className="mt-1 p-2 w-full border rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">Questions</h2>
          {questions.map((question, qIndex) => (
            <div
              key={question._id}
              className="mt-4 border p-4 rounded"
            >
              <label className="block text-sm font-medium">
                Question #{qIndex + 1}
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded"
                placeholder="Enter the question"
                value={question.text}
                onChange={(e) =>
                  handleQuestionChange(question._id, e.target.value)
                }
                required
              />
              <div className="mt-4">
                <h3 className="font-semibold">Answers</h3>
                {question.answers.map((answer, aIndex) => (
                  <div
                    key={answer._id}
                    className="mt-2 flex space-x-4"
                  >
                    <input
                      type="text"
                      className="p-2 w-1/2 border rounded"
                      placeholder={`Answer #${aIndex + 1}`}
                      value={answer.text}
                      onChange={(e) =>
                        handleAnswerChange(
                          question._id,
                          answer._id,
                          'text',
                          e.target.value
                        )
                      }
                      required
                    />
                    <select
                      className="p-2 border rounded"
                      value={answer.weight}
                      onChange={(e) =>
                        handleAnswerChange(
                          question._id,
                          answer._id,
                          'weight',
                          Number(e.target.value)
                        )
                      }
                      required
                    >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                    </select>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={answer.isCorrect}
                        onChange={(e) =>
                          handleAnswerChange(
                            question._id,
                            answer._id,
                            'isCorrect',
                            e.target.checked
                          )
                        }
                      />
                      <span>Correct</span>
                    </label>
                    <button
                      type="button"
                      className="p-2 bg-red-500 text-white rounded"
                      onClick={() => removeAnswer(question._id, answer._id)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                {question.answers.length < 5 && (
                  <button
                    type="button"
                    className="mt-2 p-2 bg-blue-500 text-white rounded"
                    onClick={() => addAnswer(question._id)}
                  >
                    Add Answer
                  </button>
                )}
              </div>

              <button
                type="button"
                className="mt-4 p-2 bg-red-500 text-white rounded"
                onClick={() => removeQuestion(question._id)}
              >
                Remove Question
              </button>
            </div>
          ))}
          {questions.length < 20 && (
            <button
              type="button"
              className="mt-4 p-2 bg-green-500 text-white rounded"
              onClick={addQuestion}
            >
              Add Question
            </button>
          )}
        </div>

        <button
          type="submit"
          className="mt-6 p-3 bg-indigo-600 text-white rounded"
        >
          Create Questionnaire
        </button>
      </form>
    </div>
  );
};

export default CreateQuestionnaire;

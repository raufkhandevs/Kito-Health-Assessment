'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { IDBQuestionnaire } from '@/types';
import Button from '@/components/common/Button';
import { showQuestionnaireApi } from '@/lib/apis/questionnaire';
import List from '@/components/questionnaire/show/List';
import Loader from '@/components/common/Loader';

const ShowQuestionnaire = () => {
  const router = useRouter();
  const params = useParams();

  const id = params.id as string;

  const [questionnaire, setQuestionnaire] = useState<IDBQuestionnaire | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);

  useEffect(() => {
    if (!id) return;
    const fetchQuestionnaire = async () => {
      try {
        const response = await showQuestionnaireApi(id);
        setQuestionnaire(response.data);
        setLoading(false);
      } catch (error) {
        const err = error as Error;
        setError(err.message);
        setLoading(false);
      }
    };
    fetchQuestionnaire();
  }, [id]);

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );
  if (error) return <div>{error}</div>;
  if (!questionnaire) return <div>No questionnaire found</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between mb-4 items-center">
        <h1 className="text-3xl font-bold mb-4">{questionnaire.title}</h1>
        <Button
          text="Back"
          onClick={() => router.push('/questionnaire')}
        />
      </div>
      <p className="mb-6">{questionnaire.description}</p>
      <List
        questionnaire={questionnaire}
        showCorrectAnswers={showCorrectAnswers}
      />
      <Button
        className="mt-6"
        text={
          showCorrectAnswers ? 'Hide Correct Answers' : 'Show Correct Answers'
        }
        onClick={() => setShowCorrectAnswers(!showCorrectAnswers)}
      />
    </div>
  );
};

export default ShowQuestionnaire;

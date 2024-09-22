'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/common/Button';
import { IDBQuestionnaire } from '@/types';
import { fetchAllQuestionnairesApi } from '@/lib/apis/questionnaire';
import List from '@/components/questionnaire/List';
import Filters from '@/components/questionnaire/Filters';

const Questionnaires = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [questionnaires, setQuestionnaires] = useState<IDBQuestionnaire[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await fetchAllQuestionnairesApi(page, perPage);
      setQuestionnaires(data);
    };

    fetchData();
  }, [page, perPage]);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold">All Questionnaires</h2>
        <Button
          text="Back"
          onClick={() => router.push('/')}
        />
      </div>
      <Filters
        page={page}
        setPage={setPage}
        perPage={perPage}
        setPerPage={setPerPage}
      />
      <List questionnaires={questionnaires} />
    </div>
  );
};

export default Questionnaires;

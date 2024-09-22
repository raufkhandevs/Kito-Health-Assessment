import { IDBQuestionnaire } from '@/types';
import Link from 'next/link';

const List = ({ questionnaires }: { questionnaires: IDBQuestionnaire[] }) => {
  return (
    <ul className="space-y-4">
      {questionnaires.map((q) => (
        <li
          key={q._id}
          className="bg-white shadow-md p-4 rounded-lg"
        >
          <Link href={`/questionnaire/${q._id}`}>
            <h3 className="text-xl font-bold">{q.title}</h3>
            <p>{q.description}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default List;

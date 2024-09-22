import Button from '@/components/common/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">
        Welcome to the Questionnaire System
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <Link href="/questionnaire">
          <Button text="View Questionnaires" />
        </Link>
        <Link href="/questionnaire/create">
          <Button text="Create Questionnaire" />
        </Link>
      </div>
    </div>
  );
}

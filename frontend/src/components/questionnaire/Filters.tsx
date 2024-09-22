import React from 'react';
import Select from '../common/Select';

const pageOptions = [
  { value: 1, label: 1 },
  { value: 2, label: 2 },
];

const perPageOptions = [
  { value: 10, label: 10 },
  { value: 20, label: 20 },
  { value: 50, label: 50 },
];

const Filters = (props: {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  perPage: number;
  setPerPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { page, setPage, perPage, setPerPage } = props;
  return (
    <div className="flex items-center gap-4 my-4">
      <div className="flex gap-2">
        <div>Page:</div>
        <Select
          value={page}
          onChange={setPage}
          options={pageOptions}
        />
      </div>
      <div className="flex gap-2">
        <div>Limit:</div>
        <Select
          value={perPage}
          onChange={setPerPage}
          options={perPageOptions}
        />
      </div>
    </div>
  );
};

export default Filters;

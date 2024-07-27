import { useState } from 'react';

interface UsePagination {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
}

const UsePagination = (): UsePagination => {
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);

  return { page, setPage, offset, setOffset };
};

export default UsePagination;

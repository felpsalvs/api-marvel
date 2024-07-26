import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import UsePagination from './hooks/usePagination';
import CharacterPagination from './components/CharactersPagination';
import CharacterList from './components/CharacterList';
import logo from './assets/marvel-logo.svg';
import './App.css';

const App = () => {
  const [queryClient] = useState(() => new QueryClient());
  const { offset, setOffset } = usePagination();

  const handlePageChange = (event, value) => {
    setOffset(value);
  };

  return (
    <>
      <div className="flex justify-center">
        <img
          className="w-64 md:w-80 pt-4 pb-10 transition-all duration-500"
          src={logo}
          alt="Marvel"
        />
      </div>
      <QueryClientProvider client={queryClient}>
        <CharacterList offset={offset} />
        <div>
          <CharactersPagination onPageChange={handlePageChange} />
        </div>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
};

export default App;

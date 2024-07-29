import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import './App.css';
import logo from './assets/marvel-logo.svg';
import CharacterPagination from './components/CharactersPagination';
import CharacterList from './components/CharacterList';

const App = () => {
  const [queryClient] = useState(() => new QueryClient());

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
        <CharacterList />
        <div>
          <CharacterPagination />
        </div>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
};

export default App;

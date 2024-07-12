import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import './App.css';
import CharacterList from './components/CharacterList';

const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <CharacterList />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;

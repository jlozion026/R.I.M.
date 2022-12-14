import { FC } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { Views } from './setup/routes-manager';

import './App.css';

const queryClient = new QueryClient();

const App: FC = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <Views />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
export default App;

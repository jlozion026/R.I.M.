import { FC, useEffect, useState } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import SignIn from './pages/sign-in';
//import Dashboard from '@/pages/dashboard';
//import Test from 'pages/test';

import './App.css';
import { Views } from './setup/routes-manager';

const queryClient = new QueryClient();

const refreshAccToken = async () => {
  const res = await fetch('http://localhost:4000/refresh_token', {
      method: "POST",
      credentials: "include"
  });
  const data = await res.json();
  console.log(data);
}

const App: FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    refreshAccToken();
    setLoading(false);
  }, [])

  if (loading) return <div>loading...</div>

  return (
    <QueryClientProvider client={queryClient}>
      <Views />
    </QueryClientProvider>
  );
}
export default App;

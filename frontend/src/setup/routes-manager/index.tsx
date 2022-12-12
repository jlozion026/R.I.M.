import { FC } from 'react';
import { Route, Routes } from 'react-router-dom'

import  Dashboard from '@/pages/dashboard';
import Main from '@/pages/main'
import  SignIn  from '@/pages/sign-in';

import { ProtectedRoutes } from './protectedRoute';


export const Views: FC = () => {

  return (
    <Routes>
      <Route path='/signin' element={<SignIn/>} />
      <Route element={<ProtectedRoutes />}>
        <Route path='/' element={<Main />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Route>
    </Routes>
  )
}


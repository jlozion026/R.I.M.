import { AccType } from '@/generated/graphql';
import { FC, useContext } from 'react'

import { Navigate, Outlet, useLocation } from "react-router-dom";

import { AuthContext } from "../context-manager/authContext";
import { AuthContextType } from "../context-manager/model";

export const AdminRoute: FC = ({ children }: any) => {

  const { accType } = useContext(AuthContext) as AuthContextType
  const location = useLocation();

  if (accType !== AccType.Admin) return <Navigate to="/main" replace state={{ from: location }} />

  return <Outlet /> || { children }
};

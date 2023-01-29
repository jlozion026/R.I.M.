import { Navigate, Outlet, useLocation } from "react-router-dom";
import { FC, useContext } from 'react'

import { AuthContext } from "../context-manager/authContext";
import { AuthContextType } from "../context-manager/model";

export const ProtectedRoutes: FC = ({ children }: any) => {

  const { auth } = useContext(AuthContext) as AuthContextType
  const location = useLocation();

  if (!auth) return <Navigate to="/signin" replace state={{ from: location }} />

  return <Outlet /> || { children }
};



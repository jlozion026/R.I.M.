import { Navigate, Outlet } from "react-router-dom";
import {FC, useContext} from 'react'

import {getToken} from '@/lib/auth'
//import { AuthContext } from "../context-manager/authContext";
//import { AuthContextType } from "../context-manager/model";

export const ProtectedRoutes:FC = () => {
  const token = getToken();
  //return token ? <Outlet /> : <Navigate to="/" />;
  //const {auth} = useContext(AuthContext) as AuthContextType
    return(
        token ? <Outlet/> : <Navigate to="/signin"/>
    )
};



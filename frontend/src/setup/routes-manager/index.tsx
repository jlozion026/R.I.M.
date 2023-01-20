import { FC, useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "@/pages/dashboard";
import Main from "@/pages/main";
import SignIn from "@/pages/sign-in";

import { ProtectedRoutes } from "./protectedRoute";
import NotFound from "@/pages/notfound";

import { AuthContext } from "../context-manager/authContext";
import { AuthContextType } from "../context-manager/model";

import MainContextProvider from "../context-manager/mainContext";

import Logs from "@/pages/logs_page";
import LogInfo from "@/pages/logs_info";

import { setToken, getToken } from "@/lib/auth";

export const Views: FC = () => {
  const { setAccToken } = useContext(AuthContext) as AuthContextType;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("http://localhost:4000/refresh_token", {
      method: "POST",
      credentials: "include",
    }).then(async (res) => {
      const { accessToken } = await res.json();
      if (accessToken) {
        setToken(accessToken);
        setAccToken();
      }
    });
    setLoading(false);
  }, []);

  if (loading) return <div>loading...</div>;

  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route element={<ProtectedRoutes />}>
        <Route
          path="/"
          element={
            <MainContextProvider>
              <Main />
            </MainContextProvider>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/logs" element={<Logs />} />
        <Route path="/info" element={<LogInfo />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

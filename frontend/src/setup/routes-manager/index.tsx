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

import LogsInfoContextProvider from "../context-manager/logsInfoContext";

import Logs from "@/pages/logs_page";
import LogInfo from "@/pages/logs_info";

import { setToken } from "@/lib/auth";
import Public from "@/pages/public";
import { AdminRoute } from "./adminRoute";

export const Views: FC = () => {
  const { setAccToken, setAccType } = useContext(AuthContext) as AuthContextType;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("http://localhost:4000/refresh_token", {
      method: "POST",
      credentials: "include",
    }).then(async (res) => {
      const { ok, payloadData } = await res.json();
      if (ok) {
        setToken(payloadData.accessToken);
        setAccType(payloadData.accType);
        setAccToken();
      }
    });
    setLoading(false);
  }, []);

  if (loading) return <div>loading...</div>;

  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/" element={<Public />} />
      <Route element={<ProtectedRoutes />}>
        <Route
          path="/main"
          element={
            <MainContextProvider>
              <Main />
            </MainContextProvider>
          }
        />
        <Route element={<AdminRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/logs" element={<Logs />} />
          <Route
            path="/info"
            element={
              <LogsInfoContextProvider>
                <LogInfo />
              </LogsInfoContextProvider>
            }
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

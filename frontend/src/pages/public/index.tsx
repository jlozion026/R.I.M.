import { FC, useContext } from "react"

import { Navigate } from "react-router-dom";
import { AuthContext } from "@/setup/context-manager/authContext";
import { AuthContextType } from "@/setup/context-manager/model";

const Public: FC = () => {

  const {
    auth,
  } = useContext(AuthContext) as AuthContextType;

  if (auth) {
    return <Navigate to="/main" replace />;
  }

  return (
    <div className="public-page">hello</div>
  )

}

export default Public

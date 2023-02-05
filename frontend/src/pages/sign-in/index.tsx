import { FC, useContext } from "react";

import QCLOGO from "@/Assets/svg/QCLOGO.svg";
import wave from "@/Assets/svg/wave.svg";
import things from "@/Assets/svg/things.svg";
import wave2 from "@/Assets/svg/wave2.svg";

import "./style.css";
import { Navigate } from "react-router-dom";
import { AuthContext } from "@/setup/context-manager/authContext";
import { AuthContextType } from "@/setup/context-manager/model";
import SignInForm from "./components/signInForm";

const SignIn: FC = () => {
  const {
    auth,
  } = useContext(AuthContext) as AuthContextType;

  if (auth) {
    return <Navigate to="/main" replace />;
  }

  return (
    <div className="main-grid">
      <SignInForm />

      <div className="wave-container">
        <img src={wave} className="wave1" alt="test" />
      </div>
      <div className="mobile-container">
        <img src={wave2} className="wave2" alt="wave" />
      </div>
      <div className="svg-container">
        <div className="header">
          <img src={QCLOGO} className="qcPic" alt="logo" />
          <label className="qcFont">Quezon City</label>
        </div>

        <div className="svg">
          <img src={things} alt="hello" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;

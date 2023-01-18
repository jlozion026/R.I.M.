import React, { FC, ChangeEvent, useState, useContext } from "react";

import { useLoginMutation, LoginMutation } from "@/generated/graphql";

import graphqlRequestClient from "@/lib/client/graphqlRequestClient";

import InputField from "@/components/InputField";
import Button from "@/components/Button";
import { btnType } from "@/components/Button/models";

import QCLOGO from "@/Assets/svg/QCLOGO.svg";
import wave from "@/Assets/svg/wave.svg";
import things from "@/Assets/svg/things.svg";
import wave2 from "@/Assets/svg/wave2.svg";
import { credentials } from "./models";
import { LoginProps } from "./utils";

import "./style.css";
import { Navigate } from "react-router-dom";
import { AuthContext } from "@/setup/context-manager/authContext";
import { AuthContextType } from "@/setup/context-manager/model";

const SignIn: FC = () => {
  const { auth, setAccToken } = useContext(AuthContext) as AuthContextType;

  const [errMsg, setErrMsg] = useState("");
  const [signInData, setData] = useState<credentials>({
    email: "",
    password: "",
  });

  const { mutate } = useLoginMutation<Error>(graphqlRequestClient, {
    onSuccess: (data: LoginMutation) => {

      if (data.login?.accessToken) setAccToken();
    },

    onError: (error: Error) => {
      const res: string[] = error.message.split(":", 1);
      setErrMsg(res[0]);
    },
    cacheTime: 5000,
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //console.log(signInData.email + "\n" + signInData.password);

    mutate({
      where: {
        email: { equals: signInData.email },
        password: { equals: signInData.password },
      },
    });
  };

  const getCred = (val: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...signInData,
      [val.target.name]: val.target.value,
    });
  };

  if (auth) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="main-grid">
      <div className="login-container">
        <div className="wrap-container">
          <div className="title">
            <h1>LOGIN</h1>
          </div>
          <form className="login" onSubmit={(e) => onSubmit(e)}>
            {LoginProps.map((val, key) => {
              return (
                <div className="wrapper" key={key}>
                  <InputField
                    label={val.label}
                    id={val.id}
                    forinput={val.forinput}
                    type={val.type}
                    placeholder={val.place_holder}
                    name={val.name}
                    auto={val.auto}
                    getData={getCred}
                    required={val.require}
                  />
                  <div className="validation">*Required</div>
                </div>
              );
            })}

            {errMsg ? <div className="err">{errMsg}</div> : ""}

            <div className="check-container">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <div className="btn-container">
              <Button
                type={btnType.Submit}
                buttonStyle={"btn--primary"}
                onClick={onSubmit}
                buttonSize={"btn--medium"}
              >
                SignIn
              </Button>
            </div>
          </form>
        </div>
      </div>

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

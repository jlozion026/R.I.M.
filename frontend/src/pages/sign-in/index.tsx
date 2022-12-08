import React, { FC, ChangeEvent, useState } from "react";

import { useLoginMutation, LoginMutation, LoginMutationVariables} from '@/generated/graphql'

import graphqlRequestClient from '@/lib/client/graphqlRequestClient';

import InputField from "@/components/InputField";
import Button from "@/components/Button";

import QCLOGO from "@/Assets/svg/QCLOGO.svg";
import wave from "@/Assets/svg/wave.svg";
import things from "@/Assets/svg/things.svg";
import wave2 from "@/Assets/svg/wave2.svg";

import { credentials } from "./models";
import { LoginProps } from "./utils";

import './style.css';

const SignIn: FC = () => {

  const [errMsg, setErrMsg] = useState("");
  const [data, setData] = useState<credentials>({
    email: "",
    password: "",
  })

  const getCred = (val: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [val.target.name]: val.target.value
    })
  }

  
  const {mutate} = useLoginMutation<Error>(graphqlRequestClient, {
      onSuccess:(data: LoginMutation) =>{
          return console.log('data: ', data.login);
      },
      onError:(error:Error) =>{
          const res: string[] = error.message.split(":",1);
          setErrMsg(res[0]);
        }
    })

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(data.email + "\n" + data.password);

    mutate({where: {
      email:{equals: data.email},
      password:{equals: data.password}
    }})
  }

  return (
    <div className="main-grid">
      <div className="login-container">
        <div className="wrap-container">
          <div className="title"><h1>LOGIN</h1></div>
          <form className="login" onSubmit={e => onSubmit(e)}>
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
                    required />
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
                type={"submit"}
                buttonStyle={"btn--primary"}
                onClick={onSubmit}
                buttonSize={"btn--medium"}
                children={"Login"} ></Button>
            </div>
          </form>
        </div>
      </div>

      <div className="wave-container"><img src={wave} alt="test" /></div>
      <div className="mobile-container"><img src={wave2} alt="wave" /></div>
      <div className="svg-container">
        <div className="header"><img src={QCLOGO} alt="logo" />
          <label className="qcFont">Quezon City</label>
        </div>

        <div className="svg"><img src={things} alt="hello" /></div>
      </div>
    </div>
  );
}

export default SignIn;

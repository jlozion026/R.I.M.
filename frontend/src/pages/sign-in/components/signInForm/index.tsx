import Button from '@/components/Button';
import { btnType } from '@/components/Button/models';
import InputField from '@/components/InputField';
import { ChangeEvent, FC, useContext, useState } from 'react';

import { credentials } from '../../models';
import { isValidEmail } from '@/lib/isValidEmail';

import { setToken } from '@/lib/auth';

import { useLoginMutation, LoginMutation } from "@/generated/graphql";

import graphqlRequestClient from "@/lib/client/graphqlRequestClient";

import { AuthContext } from "@/setup/context-manager/authContext";
import { AuthContextType } from "@/setup/context-manager/model";



const SignInForm: FC = () => {
  const {
    setAccType,
    setAccToken
  } = useContext(AuthContext) as AuthContextType;

  const [errMsg, setErrMsg] = useState("");
  const [signInData, setData] = useState<credentials>({
    email: "",
    password: "",
  });
  const [isEmail, setIsEmail] = useState<boolean>(false);


  const getCred = (val: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...signInData,
      [val.target.name]: val.target.value,
    });
    if (val.target.name === "email") {
      isValidEmail(signInData.email, setIsEmail);
    }
  };


  const { mutate } = useLoginMutation<Error>(graphqlRequestClient, {
    onSuccess: (data: LoginMutation) => {

      if (data.login?.accessToken) {
        setAccToken();
        setAccType(data.login.account.acc_type);
        setToken(data?.login.accessToken);
      }
    },

    onError: (error: Error) => {
      const res: number = error.message.indexOf(":") + 2;

      const jsonSubString = error.message.substring(res) // convert error message to JSON 
      const errJSON = JSON.parse(jsonSubString);

      setErrMsg(errJSON.response.errors[0].message);
    },
    cacheTime: 5000,
  });


  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate({
      where: {
        email: { equals: signInData.email },
        password: { equals: signInData.password },
      },
    });
  };

  return (
    <div className="login-container">
      <div className="wrap-container">
        <div className="title">
          <h1>LOGIN</h1>
        </div>

        <form className="login" onSubmit={(e) => onSubmit(e)}>

          <div className="wrapper" >
            <InputField
              label={'EMAIL ADDRESS'}
              id={"email-input"}
              forinput={'email-input'}
              type={"email"}
              placeholder={"Enter Email"}
              name={"email"}
              auto={true}
              getData={getCred}
              required={true}
            />
            <div data-testid="email-error" className="validation">
              {!isEmail ?
                "*Required"
                : null
              }
            </div>
          </div>

          <div className="wrapper" >
            <InputField
              label={'PASSWORD'}
              id={"password-input"}
              forinput={'password-input'}
              type={"password"}
              placeholder={"Enter Password"}
              name={"password"}
              auto={false}
              getData={getCred}
              required={true}
            />
            <div data-testid="password-error" className="validation">
              {!signInData.password.length ?
                "*Required"
                :
                null
              }
            </div>
          </div>

          <div data-testid="error-res" className="err">
            {errMsg ? errMsg : ""}
          </div>

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
              disabled={!isEmail || !(signInData.password.length > 1)}
            >
              SignIn
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignInForm

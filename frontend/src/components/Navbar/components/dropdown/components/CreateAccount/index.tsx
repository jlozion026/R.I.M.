import { FC, ChangeEvent, useState } from "react";

import {
  useRegisterOneAccountMutation,
  RegisterOneAccountMutation,
  AccType
} from "@/generated/graphql";

import InputField from "@/components/InputField";
import Button from "@/components/Button";
import { btnType } from "@/components/Button/models";

import { ICreateAccountData, ICreateAccount } from "./models";


import { RadioProps, InputProps } from './utils';

import { getToken } from "@/lib/auth";

import "./style.css";
import { stringToEnum } from "@/lib/stringToEnum";
import graphqlRequestClient from "@/lib/client/graphqlRequestClient";

const CreateAccount: FC<ICreateAccount> = ({ popUp, setMenuTrig }) => {
  const [errMsg, setErrMsg] = useState("");
  const [selectedRadioBtn, setSelectedRadioBtn] = useState<AccType | undefined>();
  const [createAccountData, setCreateAccountData] =
    useState<ICreateAccountData>({
      email: "",
      password: "",
      designation: "",
    });


  graphqlRequestClient.setHeader("authorization", `bearer ${getToken()}`); //sets the authorization header

  const { mutate } = useRegisterOneAccountMutation<Error>(graphqlRequestClient, {
    onSuccess: (data: RegisterOneAccountMutation) => {
      console.table(data);
      popUp();
      setMenuTrig();
    },

    onError: (error: Error) => {
      const err = error.message.indexOf(":") + 2;
      const jsonSubString = error.message.substring(err) // convert error message to JSON 
      const errJSON = JSON.parse(jsonSubString);

      setErrMsg(errJSON.response.errors[0].constraints[0].message)
      console.table(errJSON.response.errors[0]);
    },
  });

  const isRadioSelected = (value: string) => selectedRadioBtn === value;

  const getRadioVal = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSelectedRadioBtn(stringToEnum(e.target.value, AccType));
  }


  const getCreateAccountData = (e: ChangeEvent<HTMLInputElement>) => {
    setCreateAccountData({
      ...createAccountData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const pass = createAccountData.designation.replace(/\s/g, '').toLowerCase();
    createAccountData["password"] = pass + "pass12345";
    console.log(createAccountData.password);

    setErrMsg(""); // clear the error message state variable
    console.log(selectedRadioBtn);
    console.table(createAccountData);

    mutate({
      data: {
        email: createAccountData.email,
        password: createAccountData.password,
        designation: createAccountData.designation,
        acc_type: selectedRadioBtn!
      }
    })
  };

  return (
    <form
      className="create-account-form"
      onSubmit={() => {
        onSubmit;
      }}
    >
      {errMsg ? <div className="err">{errMsg}</div> : ""}
      <div className="ca-title">Create Account</div>
      {InputProps.map((val, key) => {
        return (
          <div className={val.style} key={key}>
            <InputField
              label={val.label}
              type={val.type}
              name={val.name}
              placeholder={val.placeholder}
              required={val.required}
              getData={getCreateAccountData}
            />
          </div>
        );
      })}
      <div className="ca-account-type">
        <div className="at-title">Account Type:</div>
        <div className="radio-btn-group">
          {RadioProps.map((val, key) => {
            return (
              <div className="radio-btn" key={key}>
                <span>{val.value}</span>
                <label className="custom-rb">
                  <InputField
                    type={"radio"}
                    name={"accountType"}
                    placeholder={""}
                    value={val.value}
                    checked={isRadioSelected(val.value)}
                    getData={getRadioVal}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            );
          })
          }
        </div>
      </div>
      <div className="ca-button">
        <Button
          type={btnType.Submit}
          buttonStyle={"btn--superBlue"}
          onClick={onSubmit}
          buttonSize={"btn--large"}
        >
          Create
        </Button>
      </div>
    </form>
  );
};

export default CreateAccount;

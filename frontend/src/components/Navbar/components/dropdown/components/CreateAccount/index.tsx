import { FC, ChangeEvent, useState, useMemo } from "react";

import { useRegisterOneAccountMutation, AccType } from "@/generated/graphql";

import InputField from "@/components/InputField";
import Button from "@/components/Button";
import { btnType } from "@/components/Button/models";

import { ICreateAccountData, ICreateAccount } from "./models";

import { RadioProps, InputProps } from "./utils";

import { getToken } from "@/lib/auth";

import { toast } from "react-toastify";

import "./style.css";

import { stringToEnum } from "@/lib/stringToEnum";
import graphqlRequestClient from "@/lib/client/graphqlRequestClient";
import { FaTimes } from "react-icons/fa";
import { isValidEmail } from "@/lib/isValidEmail";

const CreateAccount: FC<ICreateAccount> = ({ popUp, setMenuTrig }) => {
  //Toastify Message!
  const Success = () => toast.success("Successfully Created!");

  const [errMsg, setErrMsg] = useState("");

  const [createAccountData, setCreateAccountData] =
    useState<ICreateAccountData>({
      email: "",
      password: "",
      designation: "",
      radio: undefined,
    });

  graphqlRequestClient.setHeader("authorization", `bearer ${getToken()}`); //sets the authorization header

  const { mutate } = useRegisterOneAccountMutation<Error>(
    graphqlRequestClient,
    {
      onSuccess: () => {
        popUp();
        setMenuTrig();
        Success();
      },

      onError: (error: Error) => {
        const err = error.message.indexOf(":") + 2;
        console.log(err);
        const jsonSubString = error.message.substring(err); // convert error message to JSON
        console.log(jsonSubString);
        const errJSON = JSON.parse(jsonSubString);

        setErrMsg(errJSON.response.errors[0].constraints[0].message);
      },
    }
  );

  const isRadioSelected = (value: string) => createAccountData.radio === value;

  const getRadioVal = (e: ChangeEvent<HTMLInputElement>) => {
    setCreateAccountData({
      ...createAccountData,
      radio: stringToEnum(e.target.value, AccType),
    });
  };

  const getCreateAccountData = (e: ChangeEvent<HTMLInputElement>) => {
    setCreateAccountData({
      ...createAccountData,
      [e.target.name]: e.target.value,
    });
  };

  const isEmail = useMemo(
    () => isValidEmail(createAccountData.email),
    [createAccountData.email]
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const pass = createAccountData.designation.replace(/\s/g, "").toLowerCase();
    createAccountData["password"] = pass + "pass12345";

    setErrMsg(""); // clear the error message state variable

    mutate({
      data: {
        email: createAccountData.email,
        password: createAccountData.password,
        designation: createAccountData.designation,
        acc_type: createAccountData.radio!,
      },
    });
  };

  return (
    <form
      data-testid="createAccForm"
      className="create-account-form"
      onSubmit={() => {
        onSubmit;
      }}
    >
      {errMsg ? <div className="err">{errMsg}</div> : ""}

      <div className="ca-title">
        Create Account
        <span className="ca-bck-btn" onClick={() => popUp()}>
          <FaTimes />
        </span>
      </div>

      {InputProps.map((val, key) => {
        return (
          <div className={val.style} key={key}>
            <InputField
              id={val.label}
              forinput={val.label}
              label={val.label}
              type={val.type}
              name={val.name}
              placeholder={val.placeholder}
              required={val.required}
              getData={getCreateAccountData}
            />

            <div data-testid={val.error} className="validation">
              {val.type === "email"
                ? !isEmail
                  ? "*Required"
                  : null
                : !createAccountData.designation.length
                ? "*Required"
                : null}
            </div>
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
          })}
        </div>
      </div>
      <div className="ca-button">
        <Button
          type={btnType.Submit}
          buttonStyle={"btn--superBlue"}
          onClick={onSubmit}
          buttonSize={"btn--large"}
          disabled={
            !isEmail ||
            !(createAccountData.designation.length > 1) ||
            !createAccountData.radio
          }
        >
          Create
        </Button>
      </div>
    </form>
  );
};

export default CreateAccount;

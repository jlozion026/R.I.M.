import { FC, ChangeEvent, useState } from "react";

import InputField from "@/components/InputField";
import Button from "@/components/Button";
import { btnType } from "@/components/Button/models";

import { ICreateAccountData, ICreateAccount } from "./models";


import { RadioProps } from './utils';

import "./style.css";

const CreateAccount: FC<ICreateAccount> = ({ popUp, setMenuTrig }) => {
  const [errMsg, setErrMsg] = useState("");
  const [selectedRadioBtn, setSelectedRadioBtn] = useState<string>("");
  const [createAccountData, setCreateAccountData] =
    useState<ICreateAccountData>({
      email: "",
      designation: "",
      accountType: "",
    });

  const isRadioSelected = (value: string) => selectedRadioBtn === value;

  const getRadioVal = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSelectedRadioBtn(e.target.value);
  }


  const getCreateAccountData = (e: ChangeEvent<HTMLInputElement>) => {
    setCreateAccountData({
      ...createAccountData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createAccountData["accountType"] = selectedRadioBtn;

    setErrMsg(""); // clear the error message state variable
    if (createAccountData.email.indexOf("@gmail.com") === -1) {
      setErrMsg("Email should be a gmail email address.");
    } else if (!createAccountData.designation) {
      setErrMsg("Designation is required.");
    } else if (!createAccountData.accountType) {
      setErrMsg("Account Type is required.");
    } else {
      console.table(createAccountData);
      popUp();
      setMenuTrig();
    }
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
      <div className="ca-input-field ca-email">
        <InputField
          label={"Email"}
          type={"email"}
          name={"email"}
          placeholder={"Enter Email"}
          getData={getCreateAccountData}
          required={true}
        />
      </div>
      <div className="ca-input-field ca-designation">
        <InputField
          label={"Designation"}
          type={"text"}
          name={"designation"}
          placeholder={"Enter Designation"}
          getData={getCreateAccountData}
        />
      </div>
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

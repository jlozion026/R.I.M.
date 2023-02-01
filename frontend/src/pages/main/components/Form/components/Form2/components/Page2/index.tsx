import { FC } from "react";

import Button from "@/components/Button";
import InputField from "@/components/InputField";

import { Ipage2 } from "../../../../models";

import "./style.css";
import { btnType } from "@/components/Button/models";

const Page2: FC<Ipage2> = ({ GetFormData, Submit }) => {
  return (
    <>
    <div className="form2-wrapper">
    <div className="fi-container pn-container">
        <InputField
          label={"Project Name"}
          type={"text"}
          name={"projectName"}
          placeholder={"Enter Project Name"}
          getData={GetFormData}
        />
      </div>

      <div className="fi-container contractor-container">
        <InputField
          label={"Contractor"}
          type={"text"}
          name={"contractor"}
          placeholder={"Service Provider"}
          getData={GetFormData}
        />
      </div>

      <div className="finance-container  fi-container ">
        <InputField
          label={"Finance"}
          type={"text"}
          name={"sourceFund"}
          placeholder={"Source Fund"}
          getData={GetFormData}
        />
      </div>

      <div className="programAmount-container">
        <InputField
          type={"number"}
          name={"programAmount"}
          placeholder={"Program Amount"}
          getData={GetFormData}
        />
      </div>

      <div className="contractorAmount-container programAmount-container">
        <InputField
          type={"number"}
          name={"contractAmount"}
          placeholder={"Contract Amount"}
          getData={GetFormData}
        />
      </div>
      <div className="btn-container-submit">
        <Button
          type={btnType.Submit}
          buttonStyle={"btn--superBlue"}
          onClick={Submit}
          buttonSize={"btn--large"}
        >
          Submit
        </Button>
      </div>
      </div>
    
    </>
  );
};

export default Page2;

import { FC, useContext } from "react";

import Button from "@/components/Button";
import InputField from "@/components/InputField";

import { Ipage2 } from "../../../../models";

import "./style.css";
import { btnType } from "@/components/Button/models";
import { MainContext } from "@/setup/context-manager/mainContext";
import { MainContextType } from "@/setup/context-manager/model";

const Page2: FC<Ipage2> = ({ GetFormData, Submit, DisabledSumbit }) => {
  const { form2Data } = useContext(MainContext) as MainContextType;
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
            value={form2Data.projectName}
          />
        </div>

        <div className="fi-container contractor-container">
          <InputField
            label={"Contractor"}
            type={"text"}
            name={"contractor"}
            placeholder={"Service Provider"}
            getData={GetFormData}
            value={form2Data.contractor}
          />
        </div>

        <div className="finance-container  fi-container ">
          <InputField
            label={"Finance"}
            type={"text"}
            name={"sourceFund"}
            placeholder={"Source Fund"}
            getData={GetFormData}
            value={form2Data.sourceFund}
          />
        </div>

        <div className="programAmount-container">
          <InputField
            type={"number"}
            name={"programAmount"}
            placeholder={"Program Amount"}
            getData={GetFormData}
            value={form2Data.programAmount}
          />
        </div>

        <div className="contractorAmount-container programAmount-container">
          <InputField
            type={"number"}
            name={"contractAmount"}
            placeholder={"Contract Amount"}
            getData={GetFormData}
            value={form2Data.contractAmount}
          />
        </div>
        <div className="btn-container-submit">
          <Button
            type={btnType.Submit}
            buttonStyle={"btn--superBlue"}
            onClick={Submit}
            buttonSize={"btn--large"}
            disabled={DisabledSumbit}
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default Page2;

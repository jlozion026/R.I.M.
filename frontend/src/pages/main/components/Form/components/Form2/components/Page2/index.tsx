import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { FC } from "react";
import { Ipage2 } from "../../../../models";
import "./style.css";

const Page2: FC<Ipage2> = ({ GetFormData, Submit }) => {
  return (
    <>
      <div className="contractor-container">
        <InputField
          label={"Contractor"}
          type={"text"}
          auto={false}
          name={"contractor"}
          placeholder={"Service Provider"}
          forinput={""}
          id={""}
          required={false}
          getData={GetFormData}
          readonly={false}
        />
      </div>
      
      <div className="finance-container">
        <InputField
          label={"Finance"}
          type={"text"}
          auto={false}
          name={"sourceFund"}
          placeholder={"Source Fund"}
          forinput={""}
          id={""}
          required={false}
          getData={GetFormData}
          readonly={false}
        />
      </div>

      <div className="programAmount-container">
        <InputField
          label={""}
          type={"text"}
          auto={false}
          name={"programAmount"}
          placeholder={"Program Amount"}
          forinput={""}
          id={""}
          required={false}
          getData={GetFormData}
          readonly={false}
        />
      </div>
      
      <div className="contractorAmount-container">
        <InputField
          label={""}
          type={"text"}
          auto={false}
          name={"contractAmount"}
          placeholder={"Contract Amount"}
          forinput={""}
          id={""}
          required={false}
          getData={GetFormData}
          readonly={false}
        />
      </div>

      <div className="btn-container-submit">
        <Button
          icon={""}
          svg={""}
          type={"submit"}
          buttonStyle={"btn--secondary"}
          onClick={Submit}
          buttonSize={"btn--next"}
          children={"Submit"}
        ></Button>
      </div>
    </>
  );
};

export default Page2;

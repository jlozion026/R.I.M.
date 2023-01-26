import { FC } from "react";

import InputField from "@/components/InputField";
import Button from "@/components/Button";
import { btnType } from "@/components/Button/models";

import { Ipage2 } from "../../../../models";

const Page2: FC<Ipage2> = ({ SubmitUpdatedForm, GetUpdatedData }) => {
  return (
    <>
      <div className="ui-field">
        <InputField
          label={"Project Name"}
          type={"text"}
          name={"projectName"}
          placeholder={"Enter Project Name"}
          getData={GetUpdatedData}
        />
      </div>

      <div className="ui-field">
        <InputField
          label={"Contractor"}
          type={"text"}
          name={"contractor"}
          placeholder={"Service Provider"}
          getData={GetUpdatedData}
        />
      </div>

      <div className="ui-field">
        <InputField
          label={"Finance"}
          type={"text"}
          name={"sourceFund"}
          placeholder={"Source Fund"}
          getData={GetUpdatedData}
        />
      </div>

      <div className="ui-field">
        <InputField
          type={"number"}
          name={"programAmount"}
          placeholder={"Program Ammount"}
          getData={GetUpdatedData}
        />
      </div>

      <div className="ui-field">
        <InputField
          type={"number"}
          name={"contractAmount"}
          placeholder={"Contract Amount"}
          getData={GetUpdatedData}
        />
      </div>

      <div className="update-button">
        <Button
          type={btnType.Submit}
          buttonStyle={"btn--superBlue"}
          onClick={SubmitUpdatedForm}
          buttonSize={"btn--large"}
        >
          Update
        </Button>
      </div>
    </>
  );
};

export default Page2;

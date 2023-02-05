import { FC, useContext } from "react";

import InputField from "@/components/InputField";
import Button from "@/components/Button";
import { btnType } from "@/components/Button/models";

import { Ipage2 } from "../../../../models";
import { LogsInfoContext } from "@/setup/context-manager/logsInfoContext";
import { LogsInfoContextType } from "@/setup/context-manager/model";

const Page2: FC<Ipage2> = ({ SubmitUpdatedForm, GetUpdatedData, Disabled }) => {
  const { updateForm2Data } = useContext(
    LogsInfoContext
  ) as LogsInfoContextType;

  return (
    <>
      <div className="ui-field">
        <InputField
          label={"Project Name"}
          forinput="project-name"
          id="project-name"
          type={"text"}
          value={updateForm2Data.projectName}
          name={"projectName"}
          placeholder={"Enter Project Name"}
          getData={GetUpdatedData}
        />
      </div>

      <div className="ui-field">
        <InputField
          label={"Contractor"}
          forinput="contractor"
          id="contractor"
          type={"text"}
          value={updateForm2Data.contractor}
          name={"contractor"}
          placeholder={"Service Provider"}
          getData={GetUpdatedData}
        />
      </div>

      <div className="ui-field f-gap">
        <InputField
          label={"Finance"}
          type={"text"}
          forinput="finance"
          id="finance"
          value={updateForm2Data.sourceFund}
          name={"sourceFund"}
          placeholder={"Source Fund"}
          getData={GetUpdatedData}
        />
      </div>

      <div className="ui-field">
        <InputField
          type={"number"}
          forinput="pg-ammount"
          id="pg-ammount"
          value={updateForm2Data.programAmount}
          name={"programAmount"}
          placeholder={"Program Ammount"}
          getData={GetUpdatedData}
        />
      </div>

      <div className="ui-field">
        <InputField
          type={"number"}
          forinput="contract"
          id="contract"
          value={updateForm2Data.contractAmount}
          name={"contractAmount"}
          placeholder={"Contract Amount"}
          getData={GetUpdatedData}
        />
      </div>

      <div className="update-button ub-gap">
        <Button
          type={btnType.Submit}
          buttonStyle={"btn--superBlue"}
          onClick={SubmitUpdatedForm}
          buttonSize={"btn--large"}
          disabled={Disabled}
        >
          Update
        </Button>
      </div>
    </>
  );
};

export default Page2;

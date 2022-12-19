import { FC, useState } from "react";
import Button from "@/components/Button";

import { ReportsBtnProps } from "./utils";
import "./models";

import "./style.css";
import PopUp from "../PopUp";
import Form from "../Form";

const ReportsBtn: FC = () => {
  const [trigger, setTrigger] = useState<boolean>(false);
  const [formType, setFormType] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");

  const popUp = () => setTrigger(!trigger);

  const selectReports = (id: string) => {
    if (id !== "City Project Form") {
      setFormType(false);
    } else {
      setFormType(true);
    }

    setTitle(id);
    popUp();

    console.log(id);
  };

  return (
    <>
      <div className="btn-reports-container">
        {ReportsBtnProps.map((val, key) => {
          return (
            <div className="wrapper" key={key}>
              <Button
                type={val.type}
                svg={val.svg}
                icon={val.icon}
                children={val.children}
                buttonStyle={val.buttonStyle}
                buttonSize={val.buttonSize}
                onClick={() => selectReports(val.id)}
              ></Button>
            </div>
          );
        })}
      </div>
      <PopUp Trigger={trigger} popOut={popUp}>
        <Form FormType={formType} Title={title} PopUp={popUp} />
      </PopUp>
    </>
  );
};

export default ReportsBtn;

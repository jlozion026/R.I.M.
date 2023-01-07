import { FC, useState } from "react";
import Button from "@/components/Button";

import { MobileReportsBtnProps, ReportsBtnProps } from "./utils";
import "./models";

import "./style.css";

const BtnLogs: FC = () => {
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
    
      <div className="btn-logs-container">
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
        
        <div className="mobile-btn-logs-container">
        {MobileReportsBtnProps.map((val, key) => {
          return (
            <div className="mobile-wrapper" key={key}>
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

      
      
    </>
  );
};

export default BtnLogs;

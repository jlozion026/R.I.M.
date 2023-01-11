import { FC, useState } from "react";
import Button from "@/components/Button";

import { ReportsBtnProps } from "./utils";

import PopUp from "../PopUp";

import Form from "../Form";

import { IReportsBtn } from "./models";

import "./models";

import "./style.css";

const ReportsBtn: FC<IReportsBtn> = ({ PingPopUp, WindowSize }) => {
  const [title, setTitle] = useState<string>("");
  const [trigger, setTrigger] = useState<boolean>(false);
  const [formType, setFormType] = useState<boolean>(false);

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
      {WindowSize.matches ? (
        PingPopUp ? (
          <div className="main-reports-cont">
            <h2 className="btn-reports-title">Ping Location</h2>
            <div className="btn-reports-container">
              {ReportsBtnProps.map((val, key) => {
                return (
                  <div className="wrap-buttons" key={key}>
                    <Button
                      type={val.type}
                      svg={val.svg}
                      children={val.children}
                      buttonStyle={val.buttonStyle}
                      buttonSize={val.buttonSize}
                      svgBackGround={val.svgBackGround}
                      onClick={() => selectReports(val.id)}
                    ></Button>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null
      ) : (
        <div className="main-reports-cont">
          <h2 className="btn-reports-title">Ping Location</h2>
          <div className="btn-reports-container">
            {ReportsBtnProps.map((val, key) => {
              return (
                <div className="wrap-buttons" key={key}>
                  <Button
                    type={val.type}
                    svg={val.svg}
                    children={val.children}
                    buttonStyle={val.buttonStyle}
                    buttonSize={val.buttonSize}
                    onClick={() => selectReports(val.id)}
                  ></Button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <PopUp Trigger={trigger} popOut={popUp}>
        <Form FormType={formType} Title={title} PopUp={popUp} />
      </PopUp>
    </>
  );
};

export default ReportsBtn;

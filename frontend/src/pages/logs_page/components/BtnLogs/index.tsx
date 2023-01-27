import { FC } from "react";
import Button from "@/components/Button";
import { btnType } from "@/components/Button/models";

import { LogsReportsBtnProps } from "./utils";

import { IBtnLogs } from './models'

import "./style.css";

const BtnLogs: FC<IBtnLogs> = ({ TrigFetch }) => {

  return (
    <>

      <div className="logsbtncontainer">
        {LogsReportsBtnProps.map((val, key) => {
          return (
            <div className="logswrapper" key={key}>
              <Button
                type={btnType.Submit}
                svg={val.svg}
                icon={val.icon}
                buttonStyle={val.buttonStyle}
                buttonSize={val.buttonSize}
                onClick={() => TrigFetch(val.id)}
              >
                {val.children}
              </Button>
            </div>
          );
        })}
      </div>



    </>
  );
};

export default BtnLogs;

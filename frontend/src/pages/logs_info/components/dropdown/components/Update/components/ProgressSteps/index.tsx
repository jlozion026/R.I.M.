import { FC } from "react";
import { IProgressSteps } from "./models";

import "./style.css";

const ProgressSteps: FC<IProgressSteps> = ({ page }) => {
  return (
    <>
      <div className="progress-update">
        <div className="stp">
          <div className={`crcle slected ${page ? "cmpleted " : "uncmplete"}`}>
            <p className="progress-numb">1</p>
          </div>
          <div className="crcle-text">Basic Details</div>
        </div>
        <div className="stp">
          <div className={`crcle ${page ? "crcle slected" : ""}`}>
            <p className="progress-numb">2</p>
          </div>
          <div className="crcle-text">Project Details</div>
        </div>
      </div>
    </>
  );
};

export default ProgressSteps;

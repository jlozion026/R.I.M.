import { FC } from "react";
import { IProgressSteps } from "./models";

import "./style.css";

const ProgressSteps: FC<IProgressSteps> = ({ page }) => {
  return (
    <>
      <div className="progress-update">
        <div className="stp">
          <div className={`crcle slected ${page ? "cmpleted " : "uncmplete"}`}>
            1
          </div>
          <div className="crcle-text">Basic Details</div>
        </div>
        <div className="stp">
          <div className={`crcle ${page ? "crcle slected" : ""}`}>2</div>
          <div className="crcle-text">Project Details</div>
        </div>
      </div>
    </>
  );
};

export default ProgressSteps;

import { FC } from "react";
import { StepsInt } from "./models";

import "./style.css";

const Steps: FC<StepsInt> = ({ page }) => {
  return (
    <>
      <div className="progress-container">
        <div className="step">
          <div
            className={`circle selected ${page ? "completed " : "uncomplete"}`}
          >
            1
          </div>
          <div className="circle-text">Basic Details</div>
        </div>
        <div className="step">
          <div className={`circle ${page ? "circle selected" : ""}`}>2</div>
          <div className="circle-text">Project Details</div>
        </div>
      </div>
    </>
  );
};

export default Steps;

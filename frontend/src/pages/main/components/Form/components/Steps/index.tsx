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
            <p className="progress-number">1</p>
          </div>
          <div className="circle-text">Basic Details</div>
        </div>
        <div className="step">
          <div className={`circle ${page ? "circle selected" : ""}`}>
          <p className="progress-number">2</p>
          </div>
          <div className="circle-text">Project Details</div>
        </div>
      </div>
    </>
  );
};

export default Steps;

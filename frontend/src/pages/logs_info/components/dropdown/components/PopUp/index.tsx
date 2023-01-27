import { FC } from "react";
import { FaTimes } from "react-icons/fa";

import { IPopUp } from "./models";

import "./style.css";

const PopUp: FC<IPopUp> = ({ Trigger, DeleteTrig, PopOut, children }) => {
  return Trigger || DeleteTrig ? (
    <div className="pop-up">
      <p className="btn-closed">
        <FaTimes size={30} onClick={PopOut} />
      </p>
      {children}
    </div>
  ) : null;
};

export default PopUp;

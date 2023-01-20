import { FC } from "react";
import { FaTimes } from "react-icons/fa";

import { PupUpProps } from "./models";

import "./style.css";

const PopUp: FC<PupUpProps> = ({ Trigger, popOut, children }) => {
  return Trigger ? (
    <div className="popup-container">
      <p className="btn-popup">
        <FaTimes size={30} onClick={popOut} />
      </p>
      {children}
    </div>
  ) : null;
};

export default PopUp;

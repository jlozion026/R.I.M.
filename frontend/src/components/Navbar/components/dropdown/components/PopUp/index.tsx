import { FC } from "react";
import { FaTimes } from "react-icons/fa";

import { IPopUp } from "./models";

import "./style.css";

const PopUp: FC<IPopUp> = ({ Trigger, PopOut, children }) => {
  return Trigger ? (
    <div className="Navbar-pop-up">
      <p className="CreateUser-closed">
        <FaTimes size={30} onClick={PopOut} />
      </p>
      {children}
    </div>
  ) : null;
};

export default PopUp;

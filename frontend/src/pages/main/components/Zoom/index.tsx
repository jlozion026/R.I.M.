import { FC } from "react";
import { counts } from "./models";

import { MdZoomIn, MdZoomOut } from "react-icons/md";
import {BiTargetLock} from "react-icons/bi";

import "./style.css";

const Zoom: FC<counts> = ({ zoomIn, zoomOut }) => {
  return (
    <div className="zoom">
      <p className="find-target" onClick={()=>{}}>
        <BiTargetLock size={25} />
      </p>
      <p className="add-btn" onClick={zoomIn}>
        <MdZoomIn size={25} />
      </p>
      <p className="minus-btn" onClick={zoomOut}>
        <MdZoomOut size={25} />
      </p>
    </div>
  );
};

export default Zoom;
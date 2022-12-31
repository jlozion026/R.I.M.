import { FC } from "react";
import Card from "@/components/Card";
import { navCardItems } from "./models";

import {MdOutlineSpaceDashboard, MdOutlinePinDrop} from "react-icons/md";
import {CgProfile} from "react-icons/cg"

import "./style.css";
import { Link } from "react-router-dom";

const Navbar: FC<navCardItems> = ({ cardSize }) => {
  return (
    <Card cardSize={cardSize}>
      <nav className="vectorContainer">
      <Link to="/signin" className="nav-icon">
        <p><MdOutlinePinDrop/></p>
        </Link>
        <Link to="/dashboard" className="nav-icon">
         <p><MdOutlineSpaceDashboard/></p> 
        </Link>
        <Link to="/" className="nav-icon">
        <p><CgProfile/></p>
        </Link>
      </nav>
    </Card>
  );
};
export default Navbar;

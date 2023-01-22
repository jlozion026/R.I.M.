import { FC, useState } from "react";

import Card from "@/components/Card";
import DropDown from "./components/dropdown/index";


import { navCardItems } from "./models";


import { MdOutlineSpaceDashboard, MdOutlinePinDrop } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

import "./style.css";
import { Link } from "react-router-dom";

const Navbar: FC<navCardItems> = ({ cardSize, PingPopOut }) => {
  const [menuTrig, setMenuTrig] = useState<boolean>(false);

  return (
    <Card cardSize={cardSize}>
      <nav className="vectorContainer">
        <Link to="/" className="nav-icon">
          <p onClick={PingPopOut}>
            <MdOutlinePinDrop />
          </p>
        </Link>
        <Link to="/dashboard" className="nav-icon">
          <p>
            <MdOutlineSpaceDashboard />
          </p>
        </Link>

        <div className="nav-icon" onClick={() => setMenuTrig(true)}>
          <p>
            <CgProfile />
          </p>
          {
            menuTrig
              ?
              <DropDown />
              :
              null
          }
        </div>
      </nav>
    </Card>
  );
};
export default Navbar;

import { FC, useState } from "react";

import Card from "@/components/Card";
import DropDown from "./components/dropdown/index";

import { navCardItems } from "./models";

import { MdOutlineSpaceDashboard, MdOutlinePinDrop } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

import "./style.css";
import { Link } from "react-router-dom";

import useOnclickOutside from "react-cool-onclickoutside";

const Navbar: FC<navCardItems> = ({ cardSize, PingPopOut }) => {
  const [menuTrig, setMenuTrig] = useState<boolean>(false);

  const handleTrigMenu = () => setMenuTrig(!menuTrig);

  const ref = useOnclickOutside(() => {
    setMenuTrig(false);
  });

  return (
    <Card cardSize={cardSize}>
      <nav className="vectorContainer" >
        <Link to="/" className="nav-icon">
          <p onClick={PingPopOut} id={window.location.pathname == "/" ? "active" : ""}>
            <MdOutlinePinDrop />
          </p>
        </Link>
        <Link to="/dashboard" className="nav-icon" >
          <p id={window.location.pathname == "/dashboard" ? "active" : ""}>
            <MdOutlineSpaceDashboard />
          </p>
        </Link>

        <div className="nav-icon" ref={ref}>
          <p
            onClick={() => {
              setMenuTrig(!menuTrig)
            }}

            id={menuTrig? "active": ""}

          >
            <CgProfile />
          </p>
          {menuTrig ? <DropDown setMenuTrig={handleTrigMenu} /> : null}
        </div>
      </nav>
    </Card>
  );
};
export default Navbar;

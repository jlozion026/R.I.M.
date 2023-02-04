import { FC, useContext, useState } from "react";

import { AuthContext } from "@/setup/context-manager/authContext";
import { AuthContextType } from "@/setup/context-manager/model";

import Card from "@/components/Card";
import DropDown from "./components/dropdown/index";

import { navCardItems } from "./models";

import { MdOutlineSpaceDashboard, MdOutlinePinDrop } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

import "./style.css";
import { Link } from "react-router-dom";

import useOnclickOutside from "react-cool-onclickoutside";
import { AccType } from "@/generated/graphql";

const Navbar: FC<navCardItems> = ({ cardSize, PingPopOut }) => {
  const [menuTrig, setMenuTrig] = useState<boolean>(false);

  const {
    accType
  } = useContext(AuthContext) as AuthContextType;

  const handleTrigMenu = () => setMenuTrig(!menuTrig);

  const ref = useOnclickOutside(() => {
    setMenuTrig(false);
  });

  return (
    <Card cardSize={cardSize}>
      <nav className="vectorContainer" >
        <Link to="/main" className="nav-icon">
          <p onClick={PingPopOut} id={window.location.pathname == "/main" ? "active" : ""}>
            <MdOutlinePinDrop />
          </p>
        </Link>

        {
          accType === AccType.Admin
            ?
              <Link to="/dashboard" className="nav-icon" >
                <p id={window.location.pathname == "/dashboard" ? "active" : ""}>
                  <MdOutlineSpaceDashboard />
                </p>
              </Link>
            :
              null
        }

        <div className="nav-icon" ref={ref}>
          <p
            data-testid="createAccBtn"
            onClick={() => {
              setMenuTrig(!menuTrig)
            }}

            id={menuTrig ? "active" : ""}

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

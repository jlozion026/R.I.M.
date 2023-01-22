import { FC, useContext, useState } from "react";

import PopUp from "./components/PopUp";
import CreateAccount from "./components/CreateAccount";

import useOnclickOutside from "react-cool-onclickoutside";

import { IDropDown } from "./models";

import { BiLogOut } from "react-icons/bi";
import { TiUserAdd } from "react-icons/ti";

import { AuthContext } from "@/setup/context-manager/authContext";
import { AuthContextType } from "@/setup/context-manager/model";

import { setToken } from "@/lib/auth";

import { LogoutMutation, useLogoutMutation } from "@/generated/graphql";

import graphqlRequestClient from "@/lib/client/graphqlRequestClient";

import "./style.css";

const DropDown: FC<IDropDown> = ({ setMenuTrig }) => {
  const { signOut } = useContext(AuthContext) as AuthContextType;

  const [trigger, setTrigger] = useState<boolean>(false);

  const popCreateAccount = () => {
    setTrigger(!trigger);
    setMenuTrig();
  };

  const { mutate } = useLogoutMutation<Error>(graphqlRequestClient, {
    onSuccess: (data: LogoutMutation) => {
      console.log(data);
      if (data) {
        setToken("");
        signOut();
      }
    },

    onError: (error: Error) => {
      console.log(error);
    },
  });
  return (
    <>
      <div className="dropdown">
        <ul className="dropdown-card">
          <li className="menu-item" onClick={() => setTrigger(true)}>
            <p className="drop-icon">
              <TiUserAdd />
            </p>
            <p>Create User</p>
          </li>
          <li className="menu-item" onClick={() => mutate({})}>
            <p className="drop-icon">
              <BiLogOut />
            </p>
            <p>Logout</p>
          </li>
        </ul>
      </div>

      <PopUp Trigger={trigger} PopOut={popCreateAccount}>
        <CreateAccount popUp={popCreateAccount} setMenuTrig={setMenuTrig} />
      </PopUp>
    </>
  );
};
export default DropDown;

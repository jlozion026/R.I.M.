import { FC, useContext, useState } from "react";

import PopUp from "./components/PopUp";
import CreateAccount from "./components/CreateAccount";

import { useQueryClient } from "@tanstack/react-query";

import { IDropDown } from "./models";

import { BiLogOut } from "react-icons/bi";
import { TiUserAdd } from "react-icons/ti";

import { AuthContext } from "@/setup/context-manager/authContext";
import { AuthContextType } from "@/setup/context-manager/model";

import { getToken, setToken } from "@/lib/auth";

import { AccType, LogoutMutation, useLogoutMutation } from "@/generated/graphql";

import graphqlRequestClient from "@/lib/client/graphqlRequestClient";

import "./style.css";

const DropDown: FC<IDropDown> = ({ setMenuTrig }) => {
  const {
    signOut,
    accType
  } = useContext(AuthContext) as AuthContextType;

  const [trigger, setTrigger] = useState<boolean>(false);

  const popCreateAccount = () => {
    setTrigger(!trigger);
    setMenuTrig();
  };

  const queryClient = useQueryClient();
  const { mutate } = useLogoutMutation<Error>(graphqlRequestClient, {
    onSuccess: (data: LogoutMutation) => {
      if (data) {
        queryClient.clear()
        setToken("");
        signOut();
        graphqlRequestClient.setHeader("authorization", `bearer ${getToken()}`); //sets the authorization header
      }
    },

    onError: (error: Error) => {
      console.log(error);
    },
  });
  return (
    <>
      <div
        data-testid="dropdown"
        className={
          window.location.pathname == "/dashboard" || window.location.pathname == "/logs"
          ?
            "dropdown-left"
          : 
            "dropdown"
        }
      >
        <ul className="dropdown-card">
          {accType === AccType.Admin
            ?
            <li className="menu-item" onClick={() => setTrigger(true)}>
              <p className="drop-icon">
                <TiUserAdd />
              </p>
              <p>Create User</p>
            </li>
            :
            null
          }
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

import { FC, useState } from "react";

import {
  useDeleteOneReportMutation,
  DeleteOneReportMutation,
} from "@/generated/graphql";

import graphqlRequestClient from "@/lib/client/graphqlRequestClient";

import PopUp from "./components/PopUp";

import { IDropDown } from "./models";

import { AiTwotoneDelete } from "react-icons/ai";
import { RiEdit2Fill } from "react-icons/ri";

import "./style.css";
import Update from "./components/Update";

const DropDown: FC<IDropDown> = ({ report, setMenuTrig }) => {
  const [trigger, setTrigger] = useState<boolean>(false);

  const { mutate: deleteMutate } = useDeleteOneReportMutation<Error>(
    graphqlRequestClient,
    {
      onSuccess: (data: DeleteOneReportMutation) => {
        console.log(data);
      },

      onError: (error: Error) => {
        console.log(error);
      },
    }
  );

  const formTrig = () => {
    setTrigger(!trigger);
    setMenuTrig();
  };

  const submitDeleteForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    deleteMutate({
      report_id: report?.report?.report_id,
    });
  };

  return (
    <>
      <div className="dropdown-logs-info">
        <ul className="dropdown-card-logs-info">
          <li className="menu-item-logs-info" onClick={() => setTrigger(true)}>
            <p className="drop-icon-logs-info">
              <RiEdit2Fill />
            </p>
            <p>Edit Report</p>
          </li>
          <li className="menu-item-logs-info" onClick={() => setTrigger(true)}>
            <p className="drop-icon-logs-info">
              <AiTwotoneDelete />
            </p>
            <p>Delete Report</p>
          </li>
        </ul>
      </div>
      <>
        <PopUp Trigger={trigger} PopOut={formTrig}>
          <Update
            reportID={report?.report?.report_id}
            setTrigger={formTrig}
            reportType={report?.report?.report_type}
          />
        </PopUp>
      </>
    </>
  );
};
export default DropDown;

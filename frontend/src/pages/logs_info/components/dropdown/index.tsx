import { FC, useState } from "react";

import {
  useUpdateOneReportMutation,
  UpdateOneReportMutation,
  useDeleteOneReportMutation,
  DeleteOneReportMutation,
  ReportType
} from "@/generated/graphql";

import graphqlRequestClient from "@/lib/client/graphqlRequestClient";

import PopUp from "./components/PopUp";

import { IDropDown } from "./models";

import { AiTwotoneDelete } from 'react-icons/ai';
import { RiEdit2Fill } from 'react-icons/ri';


import "./style.css";

const DropDown: FC<IDropDown> = ({ report, setMenuTrig }) => {

  const [trigger, setTrigger] = useState<boolean>(false);

  const { mutate: updateMutate } = useUpdateOneReportMutation<Error>(graphqlRequestClient, {
    onSuccess: (data: UpdateOneReportMutation) => {
      console.log(data);
    },

    onError: (error: Error) => {
      console.log(error);
    },
  });

  const { mutate: deleteMutate } = useDeleteOneReportMutation<Error>(graphqlRequestClient, {
    onSuccess: (data: DeleteOneReportMutation) => {
      console.log(data);
    },

    onError: (error: Error) => {
      console.log(error);
    },
  });

  const popCreateAccount = () => {
    setTrigger(!trigger);
    setMenuTrig();
  };

  const submitUpdateCPForm = () => {

    updateMutate({
      report_id: report?.report?.report_id,
      data: {
        description: { set: "gadga" },
        city_project: {
          update: {
            project_name: { set: "Winsconsin School of Arts and Wizardry" },
            contractor_name: { set: "Harry Potter Inc" },
            date_started: { set: "2023-04-01" },
            date_ended: { set: "2023-04-01" },
            source_fund: { set: "Melo" },
            project_ammount: { set: 1000000000 },
            contract_ammount: { set: 1200000000 }
          }
        }
      }

    })

  }

  const submitUpdateIncidentForm = () => {

    updateMutate({
      report_id: report?.report?.report_id,
      data: {
        description: { set: "gadga" },
        incident: {
          update: {
            date_started: { set: "2023-04-01" },
            date_ended: { set: "2023-04-01" },
          }
        }
      }
    })
  }


  const submitUpdateForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (report?.report?.report_type !== ReportType.CityProject) {
      submitUpdateIncidentForm();
    }
    else {
      submitUpdateCPForm();
    }
  }

  const submitDeleteForm = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    
    deleteMutate({
        report_id: report?.report?.report_id
      })
  }

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

      <PopUp Trigger={trigger} PopOut={popCreateAccount}>
        <div className="ggaa">hello</div>
      </PopUp>
    </>
  );
};
export default DropDown;

import { ChangeEvent, FC, useContext } from "react";

import {
  useUpdateOneReportMutation,
  UpdateOneReportMutation,
  ReportType,
} from "@/generated/graphql";

import graphqlRequestClient from "@/lib/client/graphqlRequestClient";

import { useQueryClient } from "@tanstack/react-query";

import { LogsInfoContext } from "@/setup/context-manager/logsInfoContext";
import { LogsInfoContextType } from "@/setup/context-manager/model";

import DefaultUpdateForm from "./components/DefaultUpdateForm";
import UpdateForm2 from "./components/UpdateForm2";

import ProgressSteps from "./components/ProgressSteps";

import { FaArrowLeft } from "react-icons/fa";

import { IUpdate } from "./models";

import "./style.css";

const Update: FC<IUpdate> = ({ reportID, setTrigger, reportType }) => {
  const {
    page,
    setPage,
    defaultUpdateData,
    setDefaultUpdateData,
    updateForm2Data,
    setUpdateForm2Data,
  } = useContext(LogsInfoContext) as LogsInfoContextType;

  const queryClient = useQueryClient();
  const { mutate: updateMutate } = useUpdateOneReportMutation<Error>(
    graphqlRequestClient,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["GetOneReport", { reportId: reportID }]);
      },

      onError: (error: Error) => {
        console.log(error);
      },
    }
  );

  const GetDefaultUpdateData = (
    val: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDefaultUpdateData({
      ...defaultUpdateData,
      [val.target.name]: val.target.value,
    });
  };

  const GetUpdateForm2Data = (
    val: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setUpdateForm2Data({
      ...updateForm2Data,
      [val.target.name]: val.target.value,
    });
  };

  const SubmitDefaultUpdateData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateMutate({
      report_id: reportID,
      data: {
        description: { set: defaultUpdateData.description },
        incident: {
          update: {
            date_started: { set: defaultUpdateData.startDate },
            date_ended: { set: defaultUpdateData.endDate },
          },
        },
      },
    });
    setTrigger();
  };

  const SubmitUpdateForm2Data = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateMutate({
      report_id: reportID,
      data: {
        description: { set: updateForm2Data.description },
        city_project: {
          update: {
            project_name: { set: updateForm2Data.projectName },
            contractor_name: { set: updateForm2Data.contractor },
            date_started: { set: updateForm2Data.startDate },
            date_ended: { set: updateForm2Data.endDate },
            source_fund: { set: updateForm2Data.sourceFund },
            project_ammount: { set: Number(updateForm2Data.programAmount) },
            contract_ammount: { set: Number(updateForm2Data.contractAmount) },
          },
        },
      },
    });

    setTrigger();
  };

  return (
    <form className="update-report-form">
      <div className="header-f">
        {page ? (
          <p className="back-b" onClick={() => setPage(false)}>
            <FaArrowLeft />
          </p>
        ) : null}
        <h1 className="up-title">Update</h1>
      </div>

      {reportType === ReportType.CityProject ? (
        <ProgressSteps page={page} />
      ) : null}
      {reportType !== ReportType.CityProject ? (
        <DefaultUpdateForm
          GetUpdatedData={GetDefaultUpdateData}
          SubmitUpdatedForm={SubmitDefaultUpdateData}
        />
      ) : (
        <UpdateForm2
          GetUpdatedData={GetUpdateForm2Data}
          SubmitUpdatedForm={SubmitUpdateForm2Data}
        />
      )}
    </form>
  );
};

export default Update;

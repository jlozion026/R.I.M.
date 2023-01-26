import { ChangeEvent, FC, useContext, useState } from "react";

import { LogsInfoContext } from "@/setup/context-manager/logsInfoContext";
import { LogsInfoContextType } from "@/setup/context-manager/model";

import { stringToEnum } from "@/lib/stringToEnum";

import DefaultUpdateForm from "./components/DefaultUpdateForm";
import UpdateForm2 from "./components/UpdateForm2";

import ProgressSteps from "./components/ProgressSteps";

import { ReportType } from "@/generated/graphql";

import { FaArrowLeft } from "react-icons/fa";

import "./style.css";
import { IDefaultUpdateData, IUpdate, IUpdateForm2Data } from "./models";

const Update: FC<IUpdate> = ({ reportType }) => {
  const { page, setPage, setReportType, startDate, endDate } = useContext(
    LogsInfoContext
  ) as LogsInfoContextType;


  const [defaultUpdateData, setDefaultUpdateData] =
    useState<IDefaultUpdateData>({
      startDate: "",
      endDate: "",
      description: "",
    });

  const [updateForm2Data, setUpdateForm2Data] = useState<IUpdateForm2Data>({
    startDate: "",
    description: "",
    endDate: "",
    projectName: "",
    contractor: "",
    sourceFund: "",
    programAmount: "",
    contractAmount: "",
  });

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

    defaultUpdateData["startDate"] = startDate;
    defaultUpdateData["endDate"] = endDate;
    console.table(defaultUpdateData);
  };

  const SubmitUpdateForm2Data = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateForm2Data["startDate"] = startDate;
    updateForm2Data["endDate"] = endDate;

    console.table(updateForm2Data);
  };

  return (
    <form className="update-report-form">
      <div className="header-form">
        {page ? (
          <p className="back-btn" onClick={() => setPage(false)}>
            <FaArrowLeft />
          </p>
        ) : null}
        <div className="up-title">UPDATE</div>
      </div>

      {reportType === ReportType.CityProject ? <ProgressSteps page={page} /> : null}
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

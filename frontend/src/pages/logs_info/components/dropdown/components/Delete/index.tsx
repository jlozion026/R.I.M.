import { FC } from "react";

import { useNavigate } from "react-router-dom";
import {
  DeleteOneReportMutation,
  useDeleteOneReportMutation,
} from "@/generated/graphql";
import graphqlRequestClient from "@/lib/client/graphqlRequestClient";

import Button from "@/components/Button";
import { btnType } from "@/components/Button/models";

import { TbTrashX } from "react-icons/tb";

import { IDelete } from "./models";

import { toast } from "react-toastify";

import "./style.css";
import { useQueryClient } from "@tanstack/react-query";
const Delete: FC<IDelete> = ({ PopOut, reportType, reportID }) => {
  //Toastify Message!
  const Success = () => toast.success("Deleted Successfully!");
  const Cancel = () => {
    toast.info("Cancel!");
    PopOut();
  };

  const navigate = useNavigate();

  const change_page = () => {
    navigate("/logs", {
      state: {
        type: reportType,
      },
    });
  };

  const queryClient = useQueryClient();
  const { mutate: deleteMutate } = useDeleteOneReportMutation<Error>(
    graphqlRequestClient,
    {
      onSuccess: () => {
        queryClient.invalidateQueries([
          "PaginatedGetAllReportsByType",
          { reportType: reportType, skip: 0, take: 5 },
        ]);

        Success();
      },

      onError: (error: Error) => {
        console.log(error);
      },
    }
  );

  const onDelete = () => {
    deleteMutate({
      report_id: reportID,
    });

    change_page();
  };

  return (
    <div className="delete-report">
      <div className="trash-can">
        <TbTrashX />
      </div>

      <div className="dr-sdr-cont">
        <div className="warning">
          <p className="dr">Delete Report?</p>
          <p className="s-dr">This will delete the report permanently</p>
        </div>

        <div className="bt-row">
          <Button
            type={btnType.Button}
            buttonStyle={"btn--grey"}
            buttonSize={"btn--cancel"}
            onClick={Cancel}
          >
            Cancel
          </Button>
          <Button
            type={btnType.Button}
            buttonStyle={"btn--red"}
            buttonSize={"btn--delete"}
            onClick={onDelete}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Delete;

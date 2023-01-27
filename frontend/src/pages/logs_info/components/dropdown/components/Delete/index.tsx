import { FC } from "react";

import Button from "@/components/Button";
import { btnType } from "@/components/Button/models";

import { TbTrashX } from "react-icons/tb";

import "./style.css";

const Delete: FC = () => {
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
            onClick={() => {
              console.log("Cancel!");
            }}
          >
            Cancel
          </Button>
          <Button
            type={btnType.Button}
            buttonStyle={"btn--red"}
            buttonSize={"btn--delete"}
            onClick={() => {
              console.log("Delete!");
            }}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Delete;

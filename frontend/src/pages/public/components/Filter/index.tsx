import { FC } from "react";

import { BtnFilterprops } from "./utils";

import { IFilter } from "./models";


import "./style.css";

const Filter: FC<IFilter> = ({ setFilterType }) => {
  return (
    <>
      <div className="pub-filter-container">
        <p className="locate">Locate</p>
        <div className="btn-filter">
          {BtnFilterprops.map((val, key) => {
            return (
              <div
                className="icon-container"
                onClick={() => {
                  setFilterType(val.reporttype);
                }}
                key={key}
              >
                <img src={val.svg} alt="icon" className="btn-filter-img" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Filter;

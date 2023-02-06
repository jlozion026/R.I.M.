import { FC } from "react";

import { BtnFilterprops } from "./utils";
import Button from "@/components/Button";

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
              <div className="icon-container" key={key}
              >
                <Button
                      type={val.type}
                      svg={val.svg}
                      children={val.children}
                      buttonStyle={val.buttonStyle}
                      buttonSize={val.buttonSize}
                      svgBackGround={val.svgBackGround}
                      onClick={() => setFilterType(val.reporttype) }
                    ></Button>
              </div>

            );
          })}
        </div>
      </div>
    </>
  );
};

export default Filter;

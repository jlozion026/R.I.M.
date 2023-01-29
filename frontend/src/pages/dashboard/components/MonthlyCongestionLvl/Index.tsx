import { FC } from "react";
import Card from "@/components/Card";
import './style.css';
import { GraphItems } from "../../models";
import { MonthlyConProps } from "../utils";

import CustomBarChart from "../Charts/BarChart/index";

const MonthlyCongestionLvl: FC<GraphItems> = ({ cardSize }) => {

  return (

    <Card cardSize={cardSize}>
      <div className="monthly-wrapper">
        <div className="mcltitle">
          <p>MONTHLY CONGESTION LEVEL</p>
        </div>
        <div className="cardFlex">
          {MonthlyConProps.map((val, key) => {
            return (
              <div className="wrappermedium" key={key}>
                <p className="year">{val.year}</p>
                <p className="mclPercent">{val.mclPercentage}</p>

              </div>
            )
          }
          )}
        </div>
        <div className="monthly-graph-container">
          <CustomBarChart/>
        </div>
      </div>
    </Card>

  )
}

export default MonthlyCongestionLvl;

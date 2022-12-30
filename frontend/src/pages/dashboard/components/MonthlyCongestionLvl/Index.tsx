import { FC } from "react";
import Card from "@/components/Card";
import './style.css';
import { MonthlyConItems } from "./models";
import {  MonthlyConProps } from "../utils";

const MonthlyCongestionLvl: FC<MonthlyConItems>=({cardSize})=> {

  return (

    <Card cardSize={cardSize}>
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


    </Card>

  )
}

export default MonthlyCongestionLvl;

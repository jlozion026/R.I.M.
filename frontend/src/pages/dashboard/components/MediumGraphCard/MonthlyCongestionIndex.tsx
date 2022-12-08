import { FC } from "react";

import Card from "@/components/Card";

import { mediumCardItems } from "./models";
import {  mediumCardProps } from "../utils";

import './style.css';
import '@/pages/dashboard/style.css';

const MonthlyCongestionLvl: FC<mediumCardItems>=({cardSize})=> {

  return (

    <Card cardSize={cardSize}>
      <div className="mcltitle">
        <p>MONTHLY CONGESTION LEVEL</p>
      </div>
      <div className="cardFlex">
        {mediumCardProps.map((val, key) => {
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

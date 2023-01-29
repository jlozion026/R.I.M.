import { FC } from "react";
import Card from "@/components/Card";
import { GraphItems } from "../../models";
import { HrlyConProps } from "../utils";

import CustomAreaChart from "../Charts/AreaChart";

import {
  data,
  areas
}from '../Charts/AreaChart/utils'

import './style.css';

const HourlyCongestionLvl: FC<GraphItems> =({cardSize}) => {

    return(
        <Card cardSize={cardSize}>
          <div className="hourly-wrapper">
              <div className="hcltitle">
                    <p>HOURLY CONGESTION LEVEL</p>
                </div>
                <div className="cardFlex">
                  {HrlyConProps.map((val,key)=>{
                    return(
                      <div className="wrapperlarge" key={key}>
                        <p className="year">{val.hcyear}</p>
                        <p className="mclPercent">{val.hcPercentage}</p>
                </div>
              ) 
            } )}
              </div>  
              <div className="hourly-graph-container">
                <CustomAreaChart
                  data={data}
                  areas={areas}
                />

              </div>
          </div>  
        </Card>
  )
}
export default HourlyCongestionLvl;






import React,{FC} from "react";
import Card from "../../../../components/Card";
import './style.css';
import'../../../dashboard/style.css';
import { mediumCardItems } from "./models";
import {  mediumCardProps } from "../cards/utils";

const CardCategories3: FC<mediumCardItems>=({cardSize})=> {

        return(
           
          <Card cardSize={cardSize}>
            <div className="mcltitle">
                    <p>MONTHLY CONGESTION LEVEL</p>
                </div>
            <div className="cardFlex">
              {mediumCardProps.map((val,key)=>{
                return(
                  <div className="wrappermedium">
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

export default CardCategories3;
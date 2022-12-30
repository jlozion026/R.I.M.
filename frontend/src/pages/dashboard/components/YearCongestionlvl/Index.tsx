import React,{FC} from "react";
import Card from "../../../../components/Card";
import'../../../dashboard/style.css';
import { YearlyConItems } from "./models";
import arrowdown from "@/Assets/svg/arrowdown.svg";

const YearCongestionlvl: FC<YearlyConItems>=({cardSize})=> {

        return(
           
          <Card cardSize={cardSize}>
            <p className="medCardTitle">CONGESTION LEVEL 2021</p>
            <div className="medCardData">
              <p className="percentLevel">43%</p>
              <div className="decreaseLevel">
                <div className="decreaseIcon">
                  <img className="arrow"src={arrowdown} alt="arrow"/>
                  <p className="pLevel">10%</p>
                </div>
              <p className="pLeveltitle">Decrease since 2020</p>
              </div>
            </div>
          </Card> 

  )
}

export default YearCongestionlvl;

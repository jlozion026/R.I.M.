import { FC } from "react";
import Card from "@/components/Card";
import '../../../dashboard/style.css';
import { GraphItems } from "../../models";
import arrowdown from "@/Assets/svg/arrowdown.svg";
import './style.css';

import CustomPieChart from "../Charts/PieChart/index"

const YearCongestionlvl: FC<GraphItems> = ({ cardSize }) => {

  return (

    <Card cardSize={cardSize}>
      <div className="year-wrapper">
        <p className="medCardTitle">CONGESTION LEVEL 2021</p>
        <div className="cardFlex">
          <p className="percentLevel">43%</p>
          <div className="decreaseLevel">
            <div className="cardFlex">
              <img className="arrow" src={arrowdown} alt="arrow" />
              <p className="pLevel">10%</p>
            </div>
            <p className="pLeveltitle">Decrease since 2020</p>
          </div>
        </div>
        <div className="year-graph-container">
          <CustomPieChart />
        </div>
      </div>
    </Card>

  )
}

export default YearCongestionlvl;

import { FC } from "react";

import Card from "@/components/Card";

import { mediumCardItems } from "./models";
import arrowdown from '@/Assets/svg/arrowdown.svg'

import './style.css';
import '@/pages/dashboard/style.css';

const YearCongestionlvl: FC<mediumCardItems> = ({ cardSize }) => {
  return (
    <Card cardSize={cardSize}>
      <p className="medCardTitle">CONGESTION LEVEL 2021</p>
      <div className="medCardData">
        <p className="percentLevel">43%</p>
        <div className="decreaseLevel">
          <div className="decreaseIcon">
            <img src={arrowdown} alt="arrow" />
            <p className="pLevel">10%</p>
          </div>
          <p className="pLeveltitle">Decrease since 2020</p>
        </div>
      </div>
    </Card>

  )
}

export default YearCongestionlvl;

import { FC } from "react";

import NavBar from "@/components/Navbar";

import { CardProps } from "./components/utils";
import { EventProp } from "./components/utils";

import CardCategories from "./components/CongestionCards";
import Summary from "./components/SummaryCard";
import MonthlyCongestionLvl from "./components/MediumGraphCard/MonthlyCongestionIndex";
import HourlyCongestionLvl from "./components/LargeGraphCard";
import YearCongestionlvl from "./components/MediumGraphCard/YearCongestionIndex";

import './style.css';

const Dashboard: FC = () => {
  return (
    <div className="mainGrid">
      <div className="navContainer">
        <div className="navCard">
          <NavBar cardSize="card--nav" />
        </div>
        <div className="mob-nav">

          <NavBar cardSize="mobile--nav" />
        </div>


      </div>
      <div className="cardContainer">
        <div className="cardCon">
          <div className="cards">

            {CardProps.map((val, key) => {
              return (
                <div className="wrapper" key={key}>
                  <CardCategories
                    cardSize={val.cardSize}
                    cardTitle={val.cardTitle}
                    cardIcon={val.cardIcon}
                    cardValue={val.cardValue}
                    imgColor={val.imgColor}
                  />
                </div>
              );

            })}
            {EventProp.map((val, key) => {
              return (
                <div className="event" key={key}>
                  <CardCategories
                    cardSize={val.cardSize}
                    cardTitle={val.cardTitle}
                    cardIcon={val.cardIcon}
                    cardValue={val.cardValue}
                    imgColor={val.imgColor}
                  />
                </div>
              );
            })}
            <div className="longCard">
              <Summary cardSize="card--long" />
            </div>

          </div>
        </div>
      </div>
      <div className="graphContainer">
        <div className="graphsWrap">

          <div className="medCard">
            <YearCongestionlvl cardSize="card--medium" />
          </div>
          <div className="largeCard">
            <HourlyCongestionLvl cardSize="card--large" />
          </div>
          <div className="medCard">
            <MonthlyCongestionLvl cardSize="card--medium" />
          </div>
          <div className="mobileLongCard">
            <Summary cardSize="card--long" />
          </div>
        </div>

      </div>

    </div>

  )
}
export default Dashboard;

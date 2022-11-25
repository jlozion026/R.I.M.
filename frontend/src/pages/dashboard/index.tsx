import React, { FC } from "react";
import './style.css';
import { CardProps } from "./components/cards/utils";
import CardCategories from "./components/cards";
import CardCategories2 from "./components/longcard";
import CardCategories3 from "./components/mediumcard";
import CardCategories4 from "../../components/Navbar";
import CardCategories5 from "./components/largecard";
import CardCategories6 from "./components/mediumcard/index1";

const Dashboard: FC = () => {
  return (
    <div className="mainGrid">
      <div className="navContainer">
        <div className="navCard">
          <CardCategories4 cardSize="card--nav" />
        </div>

      </div>
      <div className="cardContainer">
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
          <div className="longCard">
            <CardCategories2 cardSize="card--long" />
          </div>

        </div>
      </div>
      <div className="graphContainer">
        <div className="medCard">
          <CardCategories6 cardSize="card--medium" />
        </div>
        <div className="largeCard">
          <CardCategories5 cardSize="card--large" />
        </div>
        <div className="medCard">
          <CardCategories3 cardSize="card--medium" />
        </div>

      </div>

    </div>
  )
}
export default Dashboard;

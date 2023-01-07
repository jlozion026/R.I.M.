import { FC } from "react";
import NavBar from "@/components/Navbar";
import { CardProps } from "./components/utils";
import CardCategories from "./components/CongestionCards";
import Summary from "./components/Summary";
import MonthlyCongestionLvl from "./components/MonthlyCongestionLvl/Index";
import HourlyCongestionLvl from "./components/HourlyCongestionLvl";
import YearCongestionlvl from "./components/YearCongestionlvl/Index";
import './style.css';

const Dashboard: FC = () => {
  return (
    <div className="mainGrid">
      <div className="navContainer">
        <div className="navCard">
          <NavBar cardSize="nav--bar" />
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
                     <div className="longCard">
                     <Summary cardSize="card"/>
                     </div>  
                     
            </div>
            </div>
            </div>
            <div className="graphContainer">
                <div className="graphsWrap">
                  <div className="graphs">

          <div className="medCard">
            <YearCongestionlvl cardSize="card" />
          </div>
          <div className="largeCard">
            <HourlyCongestionLvl cardSize="card" />
          </div>
          <div className="medCard">
            <MonthlyCongestionLvl cardSize="card" />
          </div>
          <div className="mobileLongCard">
            <Summary cardSize="card" />
          </div>
                </div>
        </div>

      </div>

    </div>

  )
}
export default Dashboard;

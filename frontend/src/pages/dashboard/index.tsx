import { FC } from "react";

import {  ReportType } from "@/generated/graphql";

import { useIncidentCountData } from './hooks/useGetCountOfIncidentData'

import NavBar from "@/components/Navbar";
import CardCategories from "./components/CongestionCards";
import Summary from "./components/Summary";

import MonthlyCongestionLvl from "./components/MonthlyCongestionLvl/Index";
import HourlyCongestionLvl from "./components/HourlyCongestionLvl";
import YearCongestionlvl from "./components/YearCongestionlvl/Index";

import {IDashboardData} from './models'
import {getCountData} from './utils'

import { CardProps } from "./components/utils";

import './style.css';

const Dashboard: FC = () => {

  const { data: roadClosure } = useIncidentCountData(ReportType.RoadClosure);
  const { data: roadAccident } = useIncidentCountData(ReportType.RoadAccident);
  const { data: roadEvent } = useIncidentCountData(ReportType.RoadEvent);
  const { data: roadHazard } = useIncidentCountData(ReportType.RoadHazard);
  const { data: roadConstructions } = useIncidentCountData(ReportType.RoadConstruction);
  const { data: cityProject } = useIncidentCountData(ReportType.CityProject);

  const data: IDashboardData = {
    RoadClosure: roadClosure,
    RoadAccident: roadAccident,
    RoadEvent: roadEvent,
    RoadHazard: roadHazard,
    RoadConstruction: roadConstructions,
    CityProject: cityProject
  }

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
                    id={val.id}
                    cardSize={val.cardSize}
                    cardTitle={val.cardTitle}
                    cardIcon={val.cardIcon}
                    cardValue={getCountData(val.id, data)}
                    imgColor={val.imgColor}
                  />
                </div>
              );

            })}
            <div className="longCard">
              <Summary cardSize="card" />
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

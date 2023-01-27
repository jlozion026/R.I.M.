import React, { FC, useState } from "react";
import Card from "../../../../components/Card";
import './style.css';
import { logsItems } from "./models";
import { useNavigate } from "react-router-dom";


const ActLogsCategories: FC<logsItems> = ({ reportID, cardSize, cardIcon, city, address }) => {

  const navigate = useNavigate();

  const change_page = () => {
    navigate("/info", {
      state: {
        type: reportID
      }
    })
  }
  return (
    <Card cardSize={cardSize}>
      <div className="logscardData" onClick={ change_page } >
        <div className="iconImgCon">
          <img className="iconsImg" src={cardIcon} alt="iconsImg" />
        </div>
        <div className="addressContainer">
          <p className="city">{city}</p>
          <p className="address">{address}</p>
        </div>
      </div>
    </Card>

  )
}

export default ActLogsCategories;

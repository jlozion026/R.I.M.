import { FC } from "react";
import Card from "@/components/Card";
import './style.css';
import { cardItems } from "./models";

import { useNavigate } from "react-router-dom";

const CardCategories: FC<cardItems> = ({ cardSize, cardTitle, cardIcon, cardValue, imgColor }) => {
  const navigate = useNavigate();

  const change_page = (report_type: string) => {
    navigate("/logs", {
      state: {
        type: report_type
      }
    })
  }

  return (
    <Card cardSize={cardSize}>
      <div className="cardFlexx" onClick={() => change_page(cardTitle)} >
        <div className="cardData">
          <p className="cardTitle">{cardTitle}</p>
          <p className="cValue">{cardValue}</p>
        </div>
        <div className={`imgBG ${imgColor}`}>
          <img className="cIcons" src={cardIcon} alt="cIcon" />
        </div>

      </div>
    </Card>
  )
}
export default CardCategories;






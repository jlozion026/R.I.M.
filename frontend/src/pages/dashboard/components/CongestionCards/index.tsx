import { FC } from "react";
import Card from "@/components/Card";
import './style.css';
import { cardItems } from "./models";

import { useNavigate } from "react-router-dom";

const CardCategories: FC<cardItems> = ({ id, cardSize, cardTitle, cardIcon, cardValue, imgColor }) => {
  const navigate = useNavigate();

  const change_page = (id: string) => {
    navigate("/logs", {
      state: {
        type: id
      }
    })
  }

  return (
    <Card cardSize={cardSize}>
      <div className="cardFlexx" onClick={() => change_page(id)} >
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






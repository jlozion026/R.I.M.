import React,{FC} from "react";
import Card from "../../../../components/Card";
import './style.css';
import { cardItems } from "./models";


const EventProp: FC<cardItems> =({cardSize, cardTitle, cardIcon, cardValue, imgColor}) => {

    return(
        <Card cardSize={cardSize}>
            <div className="cardFlexx">
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
export default EventProp;


        

        
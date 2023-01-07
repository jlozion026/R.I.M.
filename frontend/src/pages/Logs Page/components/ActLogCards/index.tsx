import React,{FC} from "react";
import Card from "../../../../components/Card";
import './style.css';
import { logsItems } from "./models";


const ActLogsCategories: FC<logsItems> =({cardSize,cardIcon, city, address}) => {
    return(
        <Card cardSize={cardSize}>
            <div className="cardData">
                <div className="iconImg">
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
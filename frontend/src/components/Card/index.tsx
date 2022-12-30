import React, {FC} from "react";
import "./style.css";
import { CardInterface } from "./models";


const SIZES = ["card--large", "card--medium", "card--small","card--long","card--nav","mobile--nav","mobile--small","mobile--nav","card--main-nav"]


const Card: FC<CardInterface> = ({
    cardSize,       
    children
   

}) => {


    const checkCardSize = SIZES.includes(cardSize) ? cardSize : SIZES[0];

    return (
        <div className={`cardBox  ${checkCardSize}`}>
    
           {children}
        
            </div>
    );
} 


export default  Card;
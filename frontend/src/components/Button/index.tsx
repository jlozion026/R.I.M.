import React, {FC} from "react";
import "./style.css";
import { ButtonProps } from "./models";

const STYLES = ["btn--primary", "buton--secondary"]


const SIZES = ["btn--large", "btn--medium", "btn--small"]



const Button: FC<ButtonProps> = ({
    children,
    onClick,
    type,
    buttonStyle,
    buttonSize

}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
         onClick={onClick}
         type={"button"}>
        
         {children}
         </button>
    );
} 


export default Button;
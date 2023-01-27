import { FC } from "react";
import "./style.css";
import { ButtonProps } from "./models";

const STYLES = [
  "btn--primary",
  "btn--secondary",
  "btn--categories",
  "btn--selector",
  "btn--superBlue",
  "btn--logs-design",
];

const SIZES = [
  "btn--medium",
  "btn--small",
  "btn--large",
  "for-icons",
  "btn--next",
  "btn--logs",
  "btn--logs2",
  "btn--reports",
];

const COLORS = [
  " ",
  "orangeBg",
  "yellowBg",
  "alligatorBg",
  "deepYellowBg",
  "kowloonBg",
  "softBlueBg",
];

const Button: FC<ButtonProps> = ({
  icon,
  svg,
  children,
  onClick,
  type,
  buttonStyle,
  buttonSize,
  svgBackGround,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle!)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize!) ? buttonSize : SIZES[0];

  const checkIconBackGround = COLORS.includes(svgBackGround || "")
    ? svgBackGround
    : COLORS[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
    <>
      {svg ? (
        <div className={`icon-bg ${checkIconBackGround}`}>
          <img src={svg} alt="icon" className="btn-img " />
        </div>
      ) : (
        ""
      )}
      {icon}
      {children}
    </>
    </button>
  );
};

export default Button;

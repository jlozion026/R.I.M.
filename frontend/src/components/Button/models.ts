export enum btnType {
  Button = "button",
  Submit = "submit",
  Reset = "reset",
}

export interface ButtonProps {
  icon?: string;
  svg?: string;
  children: string;
  type: btnType;
  buttonStyle?: string;
  buttonSize?: string;
  svgBackGround?: string;
  onClick(e: any): void;
}

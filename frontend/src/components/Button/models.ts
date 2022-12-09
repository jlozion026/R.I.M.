export interface ButtonProps {
  icon: string;
  svg: string;
  children: string;
  type: string;
  buttonStyle: string;
  buttonSize: string;
  onClick(e: any): any;
}

export interface ButtonProps {
  trigger(): void;
  setTrigger(): void;
}

export interface IReportsBtn {
  WindowSize: MediaQueryList;
  PingPopUp: boolean;
  trigger: boolean;
  popUp(): void;
}

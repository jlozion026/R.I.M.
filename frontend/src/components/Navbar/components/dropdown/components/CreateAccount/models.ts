export interface ICreateAccountData {
  email: string;
  password: string;
  designation: string;
}

export interface ICreateAccount {
  popUp(): void;
  setMenuTrig(): void;
}

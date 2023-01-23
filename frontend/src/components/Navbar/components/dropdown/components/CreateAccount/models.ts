export interface ICreateAccountData {
  email: string;
  designation: string;
  accountType: string;
}

export interface ICreateAccount {
  popUp(): void;
  setMenuTrig(): void;
}

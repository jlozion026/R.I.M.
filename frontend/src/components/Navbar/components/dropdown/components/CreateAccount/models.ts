import { AccType } from "@/generated/graphql";

export interface ICreateAccountData {
  email: string;
  password: string;
  designation: string;
  radio: AccType|undefined;
}

export interface ICreateAccount {
  popUp(): void;
  setMenuTrig(): void;
}

export interface ITestCreateAcc{
  email: string,
  designation: string
}

export interface ITestInput{
  email?: string,
  designation?: string
}

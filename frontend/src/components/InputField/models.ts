import React from "react";

export interface input {
  readonly?: boolean;
  label?: string;
  type: string;
  auto?: boolean;
  name: string;
  placeholder: string;
  forinput?: string;
  id?: string;
  required?: boolean;
  value?: string;
  getData?(e: React.ChangeEvent<HTMLInputElement>): any;
}

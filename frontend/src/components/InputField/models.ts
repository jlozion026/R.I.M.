import React from "react";

export interface input {
  checked?: boolean;
  readonly?: boolean;
  label?: string;
  type: string;
  auto?: boolean;
  name: string;
  placeholder: string;
  forinput?: string;
  id?: string;
  required?: boolean;
  value?: string | number | undefined;
  onClick?(): void;
  getData?(e: React.ChangeEvent<HTMLInputElement>): any;
}

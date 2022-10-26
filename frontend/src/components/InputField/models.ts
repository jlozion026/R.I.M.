import React from "react"

export interface input {
    label: string;
    type: string;
    auto: boolean;
    name: string;
    placeholder: string;
    forinput:string;
    id:string;
    required: boolean;
    getData(e: React.ChangeEvent<HTMLInputElement>): any;
}
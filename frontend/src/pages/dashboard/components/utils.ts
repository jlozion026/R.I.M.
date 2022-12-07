import Accident from "Assets/svg/Accident.svg";
import Event from "Assets/svg/Event.svg";
import Hazzard from "Assets/svg/Hazzard.svg";
import roadclosure from "Assets/svg/roadclosure.svg";
import Constructions from "Assets/svg/Constructions.svg";




export const CardProps =[
    {
        cardIcon: roadclosure,
        cardTitle:"Road Closure",
        cardValue:0,
        cardSize:"card--small",
        imgColor:"rcColor"

    },
    {
        cardIcon:Constructions,
        cardTitle:"Constructions",
        cardValue:0,
        cardSize:"card--small",
        imgColor:"conColor"

    },
    {
        cardIcon:Accident,
        cardTitle:"Accidents",
        cardValue:0,
        cardSize:"card--small",
        imgColor:"acColor"

    },
    {
        cardIcon:Hazzard,
        cardTitle:"Hazzards",
        cardValue:0,
        cardSize:"card--small",
        imgColor:"hazColor"

    },

]
export const EventProp =[
    {
        cardIcon:Event,
        cardTitle:"Events",
        cardValue:0,
        cardSize:"mobile--small",
        imgColor:"eColor",
        className:"event"

    }
]
export const longCardProps =[
    {   
   
        cnl:"CONGESTION LEVEL NOW",
        data:"0%",
        title:"",
        ellipseColor:"color1"
    },
    {
        cnl:"TRAFFIC JAMS NOW",
        data:"0",
        title:"Total Count",
        ellipseColor:"color2"


    },
    {
        cnl:"",
        data:"0",
        title:"Total Length",
        ellipseColor:"color3"

    }
]

export const mediumCardProps=[
    {
        year:"2021",
        mclPercentage:"40%",

    },
    {
        year:"2020",
        mclPercentage:"58%",

    },
    {
        year:"current",
        mclPercentage:"40%",

    }
]

export const largeCardProps=[
    {
        hcyear:"Live",
        hcPercentage:"92%",

    },
    {
        hcyear:"2020",
        hcPercentage:"22%",

    },
    {
        hcyear:"2021",
        hcPercentage:"38%",

    }
]
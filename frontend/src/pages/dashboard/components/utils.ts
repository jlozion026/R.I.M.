import Roadclosure from '@/Assets/svg/Roadclosure.svg'
import Constructions from '@/Assets/svg/Constructions.svg'
import Accident from '@/Assets/svg/Accident.svg'
import Hazzard from '@/Assets/svg/Hazzard.svg'
import Cityproject from '@/Assets/svg/Cityproject.svg'
import testEvent from '@/Assets/svg/testEvent.svg'



export const CardProps =[
    {
        cardIcon: Roadclosure,
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
    {
        cardIcon:testEvent,
        cardTitle:"Events",
        cardValue:0,
        cardSize:"card--small",
        imgColor:"eventColor"

    },
    {
        cardIcon:Cityproject,
        cardTitle:"City Project",
        cardValue:0,
        cardSize:"card--small",
        imgColor:"cprojColor"

    },

]
export const SummaryProps =[
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

export const MonthlyConProps=[
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

export const HrlyConProps=[
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

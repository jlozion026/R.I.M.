import { FC } from "react";

import Card from "@/components/Card";

import { longCardItems } from "./models";
import { longCardProps } from "../utils";

import './style.css';
import '@/pages/dashboard/style.css';

const Summary: FC<longCardItems>=({cardSize})=> {

        return(
           
          <Card cardSize={cardSize}>
            <div className="LongCardFlex">
              {longCardProps.map((val,key)=>{
                return(
                  <div className="wrapperlong" key={key}>
                    <div className="ellipse" ></div>
                    <div className="datacln">
                      <p className="cnl">{val.cnl}</p>
                      <p className="percentageData">{val.data}</p>
                      <p className="dataTitle">{val.title}</p>
                    </div>
                  </div>
                )
              }
              )}
            </div>
            
          </Card>

  )
}

export default Summary;

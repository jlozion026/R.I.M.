import { FC } from "react";
import Card from "@/components/Card";
import './style.css';
import { GraphItems } from "../../models";
import { SummaryProps } from "../utils";

const Summary: FC<GraphItems>=({cardSize})=> {

        return(
           
          <Card cardSize={cardSize}>
            <div className="LongCardFlex">
              {SummaryProps.map((val,key)=>{
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

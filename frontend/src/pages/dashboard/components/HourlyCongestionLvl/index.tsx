import { FC } from "react";
import Card from "@/components/Card";
import './style.css';
import { HrlyConItems } from "./models";
import { HrlyConProps } from "../utils";



const HourlyCongestionLvl: FC<HrlyConItems> =({cardSize}) => {

    return(
        <Card cardSize={cardSize}>
            <div className="hcltitle">
                    <p>HOURLY CONGESTION LEVEL</p>
                </div>
            <div className="cardFlex">
              {HrlyConProps.map((val,key)=>{
                return(
                  <div className="wrapperlarge" key={key}>
                    <p className="year">{val.hcyear}</p>
                    <p className="mclPercent">{val.hcPercentage}</p>

            </div>
          )
        }
        )}
      </div>
    </Card>
  )
}
export default HourlyCongestionLvl;






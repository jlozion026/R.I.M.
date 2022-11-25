import { FC } from "react";
import Card from "components/Card";
import './style.css';
import { largeCardItems } from "./models";
import { largeCardProps } from "../cards/utils";



const CardCategories5: FC<largeCardItems> = ({ cardSize }) => {
  return (
    <Card cardSize={cardSize}>
      <div className="hcltitle">
        <p>HOURLY CONGESTION LEVEL</p>
      </div>
      <div className="cardFlex">
        {largeCardProps.map((val, key) => {
          return (
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
export default CardCategories5;






import { FC } from "react";
import Card from "components/Card";
import './style.css';
import 'pages/dashboard/style.css';
import { longCardItems } from "./models";
import { longCardProps } from "../cards/utils";

const CardCategories2: FC<longCardItems> = ({ cardSize }) => {
  return (

    <Card cardSize={cardSize}>
      <div className="cardFlexx">
        {longCardProps.map((val, key) => {
          return (
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

export default CardCategories2;

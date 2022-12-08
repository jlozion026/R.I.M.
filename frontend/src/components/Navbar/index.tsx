import { FC } from "react";

import Card from "@/components/Card";

import { navCardItems } from "./models";

import Vector1 from '@/Assets/svg/Vector1.svg'
import Vector2 from '@/Assets/svg/Vector2.svg'
import Vector3 from '@/Assets/svg/Vector3.svg'

import './style.css';


const CardCategories4: FC<navCardItems> = ({ cardSize }) => {

  return (
    <Card cardSize={cardSize}>
      <nav className="vectorContainer">
        <a className="map" href="abs"><img src={Vector1} alt="HTML tutorial" /></a>
        <a className="profile" href="abs"><img src={Vector2} alt="HTML tutorial" /></a>
        <a className="dashboard" href="dsf"><img src={Vector3} alt="HTML tutorial" /></a>
      </nav>
    </Card>
  )
}
export default CardCategories4;






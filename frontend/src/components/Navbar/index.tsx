import { FC } from "react";

import Card from "@/components/Card";

import { navCardItems } from "./models";

import Vector1 from '@/Assets/svg/Vector1.svg'
import Vector2 from '@/Assets/svg/Vector2.svg'
import Vector3 from '@/Assets/svg/Vector3.svg'

import './style.css';
import { Link } from "react-router-dom";


const CardCategories4: FC<navCardItems> = ({ cardSize }) => {

  return (
    <Card cardSize={cardSize}>
      <nav className="vectorContainer">
        <Link to="/" className={"map"}><img src={Vector1} alt="main icon" /></Link>
        <Link to="/signin" className="signin"><img src={Vector2} alt="prifile icon" /></Link>
        <Link to="/dashboard" className="dashboard"><img src={Vector3} alt="dashboard icon" /></Link>
      </nav>
    </Card>
  )
}
export default CardCategories4;






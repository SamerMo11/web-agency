import { Link } from "react-router-dom"
import "../Css/Components/sec2.scss"
import "../Css/Components/smallHead.scss"
import sec2Img from "../Assets/Home/about.webp"
// import vector from "../Assets/Main/Vector.svg"
import SmallHead from "../Components/SmallHead"

export default function Sec2({img ,smallHead , text1 , text2 , btn , direction = "row"}){
    return(
    <div className="sec2"  style={{flexDirection: direction }}>
        <img src={sec2Img} alt="aboutImg" />
      <div>
        <SmallHead  smallHead={smallHead} 
        // smallHead="about us"
        />
        <p>{text1} <span> work</span>
        </p>
        <p>{text2}</p>
        <Link>{btn}</Link>
      </div>
    </div>
    )
}
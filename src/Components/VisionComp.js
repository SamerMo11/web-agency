import "../Css/Components/vision.scss"
import icon from "../Assets/Home/true.svg"
// import vector from "../Assets/Main/Vector.svg"
// import SmallHead from "../Components/SmallHead"

export default function VisionComp({head, text}){
    return(
    <div className="visionComp">
        <img src={icon} alt="visionImg"/>
        <p className="head">{head}</p>
        <p className="text">{text}</p>
    </div>
    )
}
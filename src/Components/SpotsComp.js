import "../Css/Components/spots.scss"
import icon from "../Assets/Home/true.svg"
// import vector from "../Assets/Main/Vector.svg"
// import SmallHead from "../Components/SmallHead"

export default function SpotsComp({img,head, text}){
    return(
    <div className="spotsComp">
        <img src={icon} alt="spotsImg"/>
        <p className="head">{head}</p>
        <p className="text">{text}</p>
    </div>
    )
}
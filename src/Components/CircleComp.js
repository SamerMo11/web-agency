import "../Css/Components/circle.scss"
// import icon from "../Assets/Home/true.svg"
// import vector from "../Assets/Main/Vector.svg"
// import SmallHead from "../Components/SmallHead"

export default function CircleComp({num,head, text}){
    return(
    <div className="circleComp">
        <span>{num}</span>
        <p className="head">{head}</p>
        <p className="text">{text}</p>
    </div>
    )
}
import vector from "../Assets/Main/Vector.svg"

export default function SmallHead( {smallHead}){
    return(         
            <p className="smallHead">
                <img src={vector} alt="vectorImg"/>
            {smallHead}</p>
    )
}
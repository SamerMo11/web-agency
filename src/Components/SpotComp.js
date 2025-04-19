import "../Css/Components/spots.scss"
import React, { useRef } from 'react';

// import icon from "../Assets/Home/true.svg"
// import vector from "../Assets/Main/Vector.svg"
// import SmallHead from "../Components/SmallHead"

export default function SpotsComp({spotIcon,head, text}){
    const cardRef = useRef();

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xRatio = x / rect.width;
    const yRatio = y / rect.height;

    const rotateY = (xRatio - 0.5) * 30; 
    const rotateX = (0.5 - yRatio) * 30; 

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };
  
    return(
    <div className="spotsComp"
    ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
        <img src={spotIcon} alt="spotsImg"/>
        <p className="head">{head}</p>
        <p className="text">{text}</p>
    </div>
    )
}
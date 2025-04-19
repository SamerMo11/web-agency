import "../Css/Components/vision.scss"

import React, { useRef } from 'react';

export default function VisionComp({ visionIcon, head, text }) {
  const cardRef = useRef();
  const lightRef = useRef();

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const light = lightRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    light.style.left = `${x}px`;
    light.style.top = `${y}px`;
    light.style.opacity = 1;
  };

  const handleMouseLeave = () => {
    const light = lightRef.current;
    light.style.opacity = 0;
  };

  return (
    <div
      className="visionComp"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="mouse-glow" ref={lightRef}></div>

      <img src={visionIcon} alt="visionImg" />
      <p className="head">{head}</p>
      <p className="text">{text}</p>
    </div>
  );
}

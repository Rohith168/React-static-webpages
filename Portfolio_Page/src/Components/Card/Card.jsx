import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail,color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      {/* {
        (detail.map((val,ind)=>{
            return <span >{val}</span>
        }))
      } */}
      <button className="button c-button">LEARN MORE</button>
    </div>
  );
};

export default Card;
import React from "react";
import "./GaurdianCard.css";



const GaurdianCard = props => (
  
    <div
      className="card"
      value={props.id}
      onClick={() => props.handleClick(props.id)}
    >
      <div className="card-img">
        <div className="img-container">
          <img className="click-item" alt={props.name} src={props.image} />

        </div>
      </div>
    </div>
  
);

export default GaurdianCard;




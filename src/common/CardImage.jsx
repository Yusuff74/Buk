import React from "react";
import "./Css/CardImage.css";

const CardImage = ({ src, cardBody, referee, date }) => {
  return (
    <>
      <div className="container">
        <div className="card-container">
          <div className="card-image-container">
            <img src={src} />
          </div>
          <div className="card-text-container">
            <p className="card-body-container">{cardBody}</p>
            <span className="card-sub">{referee} |</span>
            <span className="card-sub">{date}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardImage;

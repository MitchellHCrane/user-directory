import React from "react";

function Controlls(props) {
  return (
    <div className="controlls">
      <h1>Controlls</h1>
      <button className="slideBtn" onClick={props.prevSlide}>
        Previous Slide
      </button>

      <button className="blueBtn">Edit</button>

      <button className="blueBtn">Delete</button>

      <button className="blueBtn">New</button>

      <button className="slideBtn" onClick={props.nextSlide}>
        Next Slide
      </button>
    </div>
  );
}

export default Controlls;

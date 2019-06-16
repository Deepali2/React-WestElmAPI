import React from "react";
import './ImageSlide.css';
import './Arrow.css';

const Arrow = ({ direction, clickFunction, glyph }) => (
  <div 
    className={ `slide-arrow ${direction}` } 
    onClick={ clickFunction }>
    { glyph } 
  </div>
);

export default Arrow;
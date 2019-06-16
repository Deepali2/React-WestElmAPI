import React, {useState} from "react";
import ImageSlide from './ImageSlide';
import Arrow from './Arrow';

const Carousel = props => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
   
  const moveSlide = newIndex => {
    if (newIndex >= imgUrls.length) newIndex = 0;
    if (newIndex < 0) newIndex = imgUrls.length - 1;
    setCurrentImageIndex(newIndex);
  };

  const {imgUrls} = props;
  
  return (          
    <div className="carousel">
      <Arrow direction="left" clickFunction={() => moveSlide(currentImageIndex - 1)} glyph="&#9664;" />
      <ImageSlide url={imgUrls[currentImageIndex]} />
      <Arrow direction="right" clickFunction={() => moveSlide(currentImageIndex + 1)} glyph="&#9654;" />
    </div>
  );  
}

export default Carousel;


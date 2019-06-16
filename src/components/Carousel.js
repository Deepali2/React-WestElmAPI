import React, {Component} from "react";
import ImageSlide from './ImageSlide';
import Arrow from './Arrow';

class Carousel extends Component {
  constructor (props) {
  super(props);		
  this.state = {
  currentImageIndex: 0  
  };

  this.nextSlide = this.nextSlide.bind(this);
  this.previousSlide = this.previousSlide.bind(this);
}

  previousSlide () {
    const lastIndex = this.props.imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
    
    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide () {
    const lastIndex = this.props.imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  }

  render () {
    return (          
      <div className="carousel">
        <Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" />
        <ImageSlide url={ this.props.imgUrls[this.state.currentImageIndex] } />
        <Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />
      </div>
    );
  }
}

export default Carousel;


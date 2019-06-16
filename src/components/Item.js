// import React, {Component} from "react";
// import Carousel from './Carousel'

// class Item extends Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       imgUrls: [],
//       imageUrl: props.item.hero.href,
//     }
//     this.clickHandler = this.clickHandler.bind(this);     
//   }  

//   componentDidMount(props) {
//     let item = this.props.item;
//     let heroImageUrl = item.hero.href;
//     let thumbnailImagesUrls = item.images.map(image => image.href);
//     let imgUrls = [heroImageUrl, ...thumbnailImagesUrls];
//     this.setState({imgUrls});
//   }
  
//   clickHandler(e) { 
//     // e.target.classList.add("selectedThumbnail");
//     this.setState({imageUrl: e.target.src});
//   }

//   render() {
//     let item = this.props.item;
//     return (
//       <li className="card">           
//         {this.props.overlayShow ? <Carousel imgUrls={this.state.imgUrls} resetOverlayShows={this.props.resetOverlayShows} /> : null}
//         <div>
//           <div className='name-price'>
//             <h1 className="item-name">{item.name}</h1>
//             <p className="item-price">${item.priceRange.selling.low} - ${item.priceRange.selling.high}</p>          
//           </div> 
//           <div><img src={this.state.imageUrl} alt='hero' className='heroImage' onClick={this.props.handleOverlayShow} /></div>
          
//           <div className='thumbnails'>            
//             <ul className="all-Thumbnail-Images">
//               <li><img src={item.thumbnail.href} alt='thumbnail' className='thumbnail' onClick={(e) => this.clickHandler(e)} /></li>
//               {item.images.map((image, index) => (
//               <li key={index}><img src={image.href} alt='tiny' className='thumbnail' onClick={(e) => this.clickHandler(e)} /></li>            
//               ))}
//             </ul>
//           </div> 
//         </div>  
//       </li>
     
//     )
//   }  
// }

import React, {useState} from "react";
import Carousel from './Carousel';
import get from 'lodash.get'; 

function Item(props) {
  const {item} = props;
  var thumbnailImagesUrls = item.images.map(image => image.href);
  const [overlayShow, setOverlayShow] = useState();
  const[heroImageUrl, setHeroImageUrl] = useState(
    get(props, 'item.hero.href', 'hero') //object, path, default value
  );  
  const [imgUrls, setImgUrls] = useState([heroImageUrl, ...thumbnailImagesUrls]); 
  

  const {low:lowSellingPrice, high: highSellingPrice} = get(
    item,
    'priceRange.selling'
  );
  
  
  const clickHandler = (e)=> { 
    // e.target.classList.add("selectedThumbnail");
    setHeroImageUrl(e.target.src);    
  }; 
  
  const handleOverlayShow = () => {
    setOverlayShow(true)
  }
    
  return (
    <li className="card" onClick={() => setOverlayShow(true)}>           
      {overlayShow && (
        <Carousel imgUrls={imgUrls} resetOverlayShows={() => setOverlayShow(false)}/>
      )}
      {/* {this.props.overlayShow ? <Carousel imgUrls={this.state.imgUrls} resetOverlayShows={this.props.resetOverlayShows} /> : null} */}
      <div>
        <div className='name-price'>
          <h1 className="item-name">{item.name}</h1>
          <p className="item-price">${lowSellingPrice} - ${highSellingPrice}</p>          
        </div> 
        <div><img src={heroImageUrl} alt='hero' className='heroImage' onClick={handleOverlayShow} /></div>
        
        <div className='thumbnails'>            
          <ul className="all-Thumbnail-Images">
            <li><img src={item.thumbnail.href} alt='thumbnail' className='thumbnail' onClick={(e) => clickHandler(e)} /></li>
            {item.images.map((image, index) => (
            <li key={index}><img src={image.href} alt='tiny' className='thumbnail' onClick={(e) => clickHandler(e)} /></li>            
            ))}
          </ul>
        </div> 
      </div>  
    </li>
     
    )
    
}

export default Item;
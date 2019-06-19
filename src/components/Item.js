import React, {useState, useRef, useEffect} from "react";
import './Item.css';
import Carousel from './Carousel';
import get from 'lodash.get'; 

function Item(props) {
  const node = useRef();

  const {item} = props;
  var thumbnailImagesUrls = item.images.map(image => image.href);

  const [open, setOpen] = useState(false);
  const[heroImageUrl, setHeroImageUrl] = useState(
    get(props, 'item.hero.href', 'hero') 
  );  
  const [imgUrls, setImgUrls] = useState([heroImageUrl, ...thumbnailImagesUrls]);   

  const {low:lowSellingPrice, high: highSellingPrice} = get(
    item,
    'priceRange.selling'
  );   
  const handleClick = (e) => {
    if (node.current.contains(e.target)) return;
    else setOpen(false);
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    }
  }, []);
    
  return (
    <li ref={node} className="card">           
      {open && 
        <Carousel imgUrls={imgUrls} />  
      }
      <div>
        <div className='name-price'>
          <h1 className="item-name">{item.name}</h1>
          <p className="item-price">${lowSellingPrice} - ${highSellingPrice}</p>          
        </div> 
        <div><img src={heroImageUrl} alt='hero' className='heroImage' onClick={(e) => setOpen(!open)} /></div>
        
        <div className='thumbnails'>            
          <ul className="all-Thumbnail-Images">
            <li><img src={item.thumbnail.href} alt='thumbnail' className='thumbnail' onClick={(e) => setHeroImageUrl(e.target.src)} /></li>
            {item.images.map((image, index) => (
            <li key={index}><img src={image.href} alt='tiny' className='thumbnail' onClick={(e) => setHeroImageUrl(e.target.src) } /></li>            
            ))}
          </ul>
        </div> 
      </div>  
    </li> 
  )    
}

export default Item;
import React, {useState} from "react";
import './ItemsList.css';
import Item from './Item';
import data from './data.js';

const ItemsList = (props) =>  { 
  const [activeCard, setActiveCard] = useState();  
  return (
    <div >
      <ul className='container'>
      {data.groups.map(item => 
      (<Item 
        item={item} 
        key={item.id} 
        activeCard={activeCard === item.id} 
        setActiveCard={()=>setActiveCard(item.id)}       
        />))}
      </ul>
    </div>
  ); 
}            


export default ItemsList;
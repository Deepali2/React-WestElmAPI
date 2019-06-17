import React, {useState} from "react";
import './ItemsList.css';
import Item from './Item';
import axios from "axios";
// import data from './data.js';

const ItemsList = (props) =>  { 
  const [activeCard, setActiveCard] = useState();
  const [data, setData] = useState();
  axios.get(`http://localhost:3001`)
    .then(response => setData(response.data));
      
  return (
    <div >
      <ul className='container'>
      {data 
        ? data.groups.map(item => (
          <Item 
            item={item} 
            key={item.id} 
            activeCard={activeCard === item.id} 
            setActiveCard={()=>setActiveCard(item.id)}       
          />
        ))
        : `waiting for data from server`
      }
      </ul>
    </div>
  ); 
}        

export default ItemsList;
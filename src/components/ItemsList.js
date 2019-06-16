import React from "react";
import Item from './Item';
import data from './data.js';

const ItemsList = (props) =>  {   
  return (
    <div >
      <ul className='container'>
      {data.groups.map(item => 
      (<Item 
        item={item} 
        key={item.id}         
        />))}
      </ul>
    </div>
  ); 
}            


export default ItemsList;
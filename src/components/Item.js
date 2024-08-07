import React,{useState} from "react";

function Item({ name, category }) {
const[isInCart, setIsIncart]=useState('false')
function handleClick(){
  setIsIncart(prevMode => !prevMode)
}
  return (
    <li className={isInCart? "in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{isInCart?'Remove From Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;

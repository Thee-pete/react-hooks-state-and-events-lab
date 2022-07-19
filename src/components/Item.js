import React, {useState} from "react";

function Item({ name, category }) {

 
  const [notInCart, setnotInCart] = useState(true);
  function handleOnClick(){
    setnotInCart(!notInCart);
   

  }
  const appClass = notInCart ? "" : "in-cart";
  const msg = notInCart ? "Add to Cart" : "Remove From Cart";


  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleOnClick}>{msg}</button>
    </li>
  );
}

export default Item;

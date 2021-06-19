import React, { useState } from "react"; 


function CartItem({ item, add, remove }) {
  var [number, setNumber] = useState(0);

  
  var addItem = () => {
    setNumber(++number);
    add(item.price);
  };

  var removeItem = () => {
    if (number > 1) {
      setNumber(--number);
      remove(item.price);
    }
  };

  return (
    <div className="cart-item">
      <div className="item-image">
        <div className="image-wrapper">
          <img src={item.img} alt="" /> 
        </div>
      </div>
      <div className="item-details">
        <div className="brand-name">{item.name}</div> 
        <div className="item-price">Rs {item.price}</div>
        <div className="actions">    
            <div>
            <button onClick={addItem}>+</button>
            <span className="quantity">{number}</span>
            <button disabled={ number > 1 ? false:true } onClick={removeItem}>-</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

import React, { useState, useEffect } from "react"; 
import CartItem from "./CartItem"; 
import { Auth } from "./useContext";


function ShoppingCart() {
  
   const auth = Auth();
   
   const { total, totalAmount, products, removeFromTotal,addToTotal ,renderItems} = auth;
 

    

  
 

  return (
    <div className="shopping-cart">
        <>
          <div className="container">{renderItems()}</div> 

                <div className="container">
                  <div style={{textAlign:'right'}} className="totals">
                    <div className="total-items">Qty :{total}</div>
                    <div className="total-quantity">Total {totalAmount}</div>
                  </div> 
                </div> 
        </> 
    </div>
  );
}

export default ShoppingCart;

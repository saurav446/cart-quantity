import React, { createContext , useContext ,useState} from 'react'   
import fakeDate from '../fakeData'
import CartItem from './CartItem';

 const Usecontexts = createContext() 

export const UseContext = () =>  useContext(Usecontexts);

 export const AuthProvider = (props) =>{  
      const auth = Auth(); 
     return   <Usecontexts.Provider value={auth}>
       {props.children} 
      </Usecontexts.Provider>
  } 

  
export const Auth = () =>{
  
  const allP = fakeDate.slice(0,2)
  var [total, setTotal] = useState(0);
  var [totalAmount, setTotalAmount] = useState(0); 
  var [products, setProducts] = useState(allP);

  var addToTotal = addAmount => {
    setTotal(++total);
    setTotalAmount((totalAmount = totalAmount + addAmount));
  };
  
  var removeFromTotal = removeAmount => {
    setTotal(--total);
    setTotalAmount((totalAmount = totalAmount - removeAmount));
  };
  var renderItems = () =>
  products.map((item,index) => {
      return (
          <CartItem
              key={item.id}
              item={item}
              add={addToTotal}
              remove={removeFromTotal}
          />
      );
  });
  
 
    return{ 
      total, setTotal,
      totalAmount, setTotalAmount,
      products, setProducts, addToTotal , removeFromTotal,renderItems
     }
}





 
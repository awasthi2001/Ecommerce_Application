import React, { createContext, useContext, useState } from "react";


export const CartContext = createContext();
const CartContextProvider = ({children}) => {
  const [totalamount,settotalamount] = useState(0);
  let [addToCartdata,setAddtoCart] = useState([]);

const AddToCart =  (id,title,price)=>{
const data = {
  id : id,
  title: title,
  price: price,
}
setAddtoCart([...addToCartdata,data]);
}
const handleRemove = (data)=>{
 const newarr =   addToCartdata.filter((dat)=>{
 return dat!=data;
 })
 setAddtoCart(newarr);
}
const handleCheckOut = ()=>{
  setAddtoCart([]);
}

  return <CartContext.Provider value={{handleCheckOut,AddToCart,addToCartdata,totalamount,settotalamount,handleRemove}}>{children}</CartContext.Provider>  ;
}

export default CartContextProvider;
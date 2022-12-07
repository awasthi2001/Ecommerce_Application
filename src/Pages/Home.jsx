import React, { useEffect, useState,useContext } from "react";
import {Button} from '@chakra-ui/react'
import { CartContext } from "../Context/CartContext/CartContextProvider";


const Home = () => {
  const {AddToCart,addToCartdata} = useContext(CartContext);
  const [loading,setloading] = useState(false);
  const [error,seterror] = useState(false);
  const [data,setdata] = useState([]);
  const fetchAndUpdate =async ()=>{
    try {
      setloading(true)
      let res = await fetch(`https://fakestoreapi.com/products`);
    let data = await res.json();
    //console.log(data);
    setdata(data);
   setloading(false)
    } catch (error) {
      seterror(true);
    }
  }

 const  handleAddToCart = (id,title,price)=>{
  AddToCart(id,title,price);
 }
  useEffect(()=>{
  fetchAndUpdate();
  },[])
  if(loading){
    return <img style={{
      display: 'block',
      margin: 'auto',
    }} src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif" alt="" />
  }
  if(error){
    return alert('Something went wrong. please refresh.')
  }
  return <div className="container" style={{
    display : 'grid',
    gridTemplateColumns : 'repeat(3,1fr)',
    gap: '20px',
    textAlign: 'center',
    marginTop : '30px'
  }} >
     {
      data.map(({id,image,title,price})=>{
    
    return <div style={{
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      padding: '5px'
    }} key={id} className="child">
      <img style={{
        width: '100%',
        height: '300px'
      }} src={image} alt="" />
      <h4>{title}</h4>
      <p>{price}</p>

      <Button  style={{
        marginTop : '10px',
      }}  onClick={()=>handleAddToCart(id,title,price)}>ADD TO CART</Button>
    
    </div>
      })
     }
  </div>;
};

export default Home;
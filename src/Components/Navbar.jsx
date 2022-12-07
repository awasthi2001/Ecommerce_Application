import React, { useContext } from "react";
import {NavLink} from 'react-router-dom'
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";
let links = [
  {
    path: '/',
    title: 'Home',
  },{
    path: '/login',
    title: 'Login',
  },
  {
    path: '/cart',
    title: 'Cart',
  }
]
const Navbar = () => {
  const {token,isAuth} = useContext(AuthContext);
  return <div style={{
    display:'flex',
    justifyContent: 'space-between'
  }}>
    <div>
    {
      isAuth ? `TOKEN :  ${token}` : ''
    }
    </div>
    <div>
 {
  links.map(({path,title})=>{
    return <NavLink  style={{
      marginLeft: '5px',
      marginRight: '5px'
    }} key={path} to={path} end>{title}</NavLink>
  })
 }
 </div>
  </div>;
};

export default Navbar;
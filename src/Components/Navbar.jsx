import { Box } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

// 1. Navbar should be responsive
// 2. On the left hand side; If the user has logged in; Token should be displated; else Token shouldn't be shown.
// 3. on the right hand side; There will be there different links. `HOME` `LOGIN` `CART`

const Navbar = () => {
  return <Box display='flex' justifyContent='flex-end'>
    <NavLink style={{
      marginLeft : '15px',
      marginRight : '15px',
      fontSize : '20px'
    }} to={`/`}>Home</NavLink>
    <NavLink style={{
      marginLeft : '15px',
      marginRight : '15px',
      fontSize : '20px'
    }} to={`/cart`}>Cart</NavLink>
    <NavLink style={{
      marginLeft : '15px',
      marginRight : '45px',
      fontSize : '20px'
    }} to={`/Login`}>Login</NavLink>
  </Box>;
};

export default Navbar;

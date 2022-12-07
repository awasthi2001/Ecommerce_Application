import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";

// 1. This particular component shall be a wrapper which based on authentication status either redirects user back to login page or renders the same page;
// 2. if user is not logged in; user should be redirected to the login page;

const PrivateRoute = ({Children}) => {
  let{token,isAuth} = useContext(AuthContext);
  let navigate = useNavigate();
  useEffect(()=>{
   if(!isAuth){
   navigate('/login');
   }
  },)
  return Children;
};

export default PrivateRoute;

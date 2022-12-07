import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";
import {Navigate} from 'react-router-dom'
const PrivateRoute = ({children}) => {
  // console.log(children)
  const {isAuth} = useContext(AuthContext);

 if(isAuth==false){
 return <Navigate to={'/login'}/>
 }
  return children;
};

export default PrivateRoute;
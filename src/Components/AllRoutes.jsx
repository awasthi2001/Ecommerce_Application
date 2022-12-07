import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Cart from '../Pages/Cart'
import Login from '../Pages/Login'
import PrivateRoute from "./PrivateRoute";
const AllRoutes = () => {
  return <div>
    <Routes>
   <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>}></Route>
   <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>}></Route>
   <Route path="/login" element={<Login/>}></Route>
    </Routes>
  </div>;
};

export default AllRoutes;
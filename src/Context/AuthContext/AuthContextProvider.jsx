import React from "react";
import { useState } from "react";
import { createContext } from "react";

// 1. create auth context and auth context provider for the entire application to have auth related data;

// 2. maintain loading,error, auth status and token in the state;

// 3. you can provide all loading, error, auth status, token data, function which updates state in here; which can be consumed anywhere in your application.
export const AuthContext = createContext();
 
const AuthContextProvider = ({children}) => {
  const[token,setToken] = useState('');
  const[isAuth,setisAuth] = useState(false);
  const[error,setError] = useState(false);
  const[loading,setLoading] = useState(false);
  
  const handleLogin = async (data)=>{
    try {
      setLoading(true);
      let res = await fetch('https://reqres.in/api/login',{
        method : 'POST',
        body : JSON.stringify(data),
        headers : {
          'content-type': 'application/json'
        }
      })
      let res2 = await res.json();
      if(res2.token){
        setisAuth(true);
        setToken(res2.token)
        setLoading(false); 
      }
    } catch (error) {
      setError(true);
    }
  }

  return <AuthContext.Provider value={{token,isAuth,error,loading,handleLogin}}>{children}</AuthContext.Provider>
};

export default AuthContextProvider;

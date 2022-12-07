import React, { createContext, useState } from "react";


export const AuthContext = createContext();

 const AuthContextProvider = ({children}) => {
  const[loading,setloading] = useState(false);
  const[error,seterror] = useState(false);
  const [token,settoken] = useState('');
  const [isAuth,SetIsAuth] = useState(false);
  const handleLogin = async (body)=>{
    try {
      setloading(true)
      let res = await fetch('https://reqres.in/api/login',{
        method: 'POST',
        body : JSON.stringify(body),
        headers :{
          "Content-Type": "application/json"
        }
      })
      let res2 = await res.json();
      if(res2.error){
        setloading(false);
        seterror(true);
      }else{
      settoken(res2.token);
      SetIsAuth(true);
      }
      setloading(false);

    } catch (error) {
      console.log(error)
      seterror(true);
    }
  }
  return <AuthContext.Provider value={{isAuth,loading,error,token,handleLogin}}>{children}</AuthContext.Provider>
};

export default AuthContextProvider;
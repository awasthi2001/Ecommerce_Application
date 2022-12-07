import React, { useContext } from "react";
import { Box, Input, Stack,Button } from '@chakra-ui/react'
import { useState } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";
import { useToast } from '@chakra-ui/react'
import { Navigate, useNavigate } from "react-router-dom";
// 1. this page should contain two input boxes which takes email and password from the user and a login button.

// 2. in this page you should get the auth state from auth context and based on auth state;if user is already logged in then user should be redirected to home page

// 3. network request (POST) should be made to api endpoint `https://reqres.in/api/login` with email and password details;

// 4. button should not allow additional click till API call is complete; user should see loading indicator on login button till API call is complete;

// 5. upon successful login, login success action is dispatched with token we get back as response and the authentication status and token is updated in the context API. user then gets redirected to home page;

// 6. Proper Alert should be displayed to user upon unsuccessful API call. the message can be `Something went wrong. please refresh.`
const initdata = {
  email : '',
  password : ''
}
const Login = () => {
  const [formdata,setformdata] = useState(initdata)
  const toast = useToast();
  let navigate = useNavigate();
  let{handleLogin,loading,error,token} = useContext(AuthContext)
 const handleChange = (e)=>{
  let{value,name} = e.target;
  setformdata({...formdata,[name]:value})
 }
  const handleSubmit = ()=>{
  handleLogin(formdata);
  }

  if(token){
    navigate('/');
    return  toast({
      title: 'Successfully Logged in',
      description: "",
      position : 'top',
      status: 'success',
      duration: 9000,
      isClosable: true,
    })

  }
   if(error){
     return  toast({
      title: 'Error',
      description: "Something went wrong. please refresh",
      position : 'top',
      status: 'error',
      duration: 9000,
      isClosable: true,
    })
   }
  return <div style={{
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    width: '40%',
    margin: 'auto',
    padding: '20px',
    marginTop: '70px'
  }}>
  <Input focusBorderColor='pink.400' placeholder='Enter Your Email Id' size='md' name='email' value={formdata.email} onChange={handleChange} />
  <Input focusBorderColor='pink.400' type='password' placeholder='Enter Your Password' name='password' size='md' value={formdata.password} onChange={handleChange}  />
  <Button  style={{
    display: 'block',
    margin: 'auto',
    marginTop: '10px'
  }} isLoading={loading} onClick={handleSubmit}>LOGIN</Button>
  </div>;
};

export default Login;

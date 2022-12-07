import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter} from 'react-router-dom'
import { ChakraProvider } from "@chakra-ui/react";
import AuthContextProvider from "./Context/AuthContext/AuthContextProvider";
// import all context providers

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<ChakraProvider>
 <BrowserRouter>
 <AuthContextProvider>
 <App />
 </AuthContextProvider>
 </BrowserRouter>
 </ChakraProvider>   
);

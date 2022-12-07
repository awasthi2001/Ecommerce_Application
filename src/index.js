import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter} from 'react-router-dom'
import { ChakraBaseProvider } from "@chakra-ui/react";
// import all context providers

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ChakraBaseProvider>
 <BrowserRouter>
 <App />
 </BrowserRouter>
 </ChakraBaseProvider>   
);

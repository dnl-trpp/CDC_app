import "./App.css";


import Products from "./components/Products";
import Home from "./components/Home";
import Merchant from "./components/Merchant";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {



  
  return (

   
    <div className="App">
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/merchants" element={<Merchant/>} />
        <Route path="/products" element={<Products/>} />
      </Routes>
    
    </BrowserRouter>

    </div>
  ) 
      
}

export default App;
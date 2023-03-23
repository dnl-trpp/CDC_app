import React from 'react'
import "./App.css";
import Products from "./components/Products";
import WarehouseManagement from "./components/WarehouseManagement";
import Home from "./pages/Home";
import Merchant from "./pages/Merchant";
import { BrowserRouter, Routes, Route} from "react-router-dom";




function App() {
  //per quanto riguarda products dovrebbero starci due endpoint uno per i prodotti visibili all'utente e uno per il mercante



  return (

    <div className="App">
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/merchants" element={<Merchant/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/warehouse/:id" element={<WarehouseManagement/>} /> 
        
      </Routes>
    
    </BrowserRouter>

    </div>
  ) 
      
}

export default App;
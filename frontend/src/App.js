import React from 'react'
import "./App.css";

import WarehouseManagement from "./components/WarehouseManagement";
import Home from "./pages/Home";
import Merchant from './pages/Merchant';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductsPage from './pages/ProductsPage';
import { BrowserRouter, Routes, Route} from "react-router-dom";






function App() {
  //per quanto riguarda products dovrebbero starci due endpoint uno per i prodotti visibili all'utente e uno per il mercante cosi sto facendo 
  // /warehouse per merchant and /products per gli utenti



  return (

    <div className="App">
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/merchants" element={<Merchant/>} />
        <Route path="/products" element={<ProductsPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/warehouse/:id" element={<WarehouseManagement/>} /> 
        
      </Routes>
    
    </BrowserRouter>

    </div>
  ) 
      
}

export default App;
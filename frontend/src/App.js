import "./App.css";
<<<<<<< HEAD

import Products from "./components/Products";
import Home from "./components/Home";
import Merchant from "./components/Merchant";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
=======
import Products from "./components/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

>>>>>>> c6a8bf513be531512db48d068479350ebe7464f9

  
  return (
<<<<<<< HEAD
   
    <div className="App">
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/merchants" element={<Merchant/>} />
        <Route path="/products" element={<Products/>} />
      </Routes>
    
    </BrowserRouter>

    </div>
    
    
=======

    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/products" element={<Products/>} />
        </Routes>
      </div>
    </BrowserRouter>

>>>>>>> c6a8bf513be531512db48d068479350ebe7464f9
  );
    
  
}

export default App;
import "./App.css";
import Products from "./components/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (

    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/products" element={<Products/>} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;

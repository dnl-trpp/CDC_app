//questa dovrebbe essere la pagina accessibile all'utente dopo aver fatto il login


import * as React from 'react';
import { NavLink } from 'react-router-dom'
import { Footer, Products } from '../components';

const ProductsPage = () => {

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
            <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">CDC SHOP</NavLink>
                <ul className="navbar-nav m-auto my-2 text-center">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/account">Account</NavLink>
                    </li>
                </ul>
                <div class="row">
               
                    <div class="input-group">
                        <input type="search" class="form-control" placeholder="Serach for name"  aria-label="Search" aria-describedby="button-addon2"></input>
                        <button class="btn btn-dark me-3" type="button" id="button-addon2" ><i class="fa fa-search"></i></button>
                    </div>
               </div>  
  
            </div>
        </nav>
      <div class="container my-3 py-3">
        <div class="row">
            <div class="col-4">
            <select class="form-select m-2" defaultValue={"default"} >
                <option value="default">Sort by</option>
                <option>Price - Lowest to Highest</option>
                <option>Price - Highest to Lowest</option>
            </select>
            </div>
        </div>
    </div>
        <Products/>
        <Footer/>
    </>
        
      
    )
  };
  
  export default ProductsPage;
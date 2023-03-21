import * as React from 'react';
import { NavLink } from 'react-router-dom'

const Merchant = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
            <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/merchants"> MERCHANT PANNEL</NavLink>
            
                
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-dark m-1" type="submit">Search</button>
            </form>  
  
            </div>
            
        
      </nav>
      
    )
  };
  
  export default Merchant;
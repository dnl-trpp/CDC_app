import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from './Login'
import Registration from './Registration'


const Navbar = () => {
    var userInfo =localStorage.getItem('auth_token');
    if (userInfo){
         userInfo =userInfo.slice(1,-1).replaceAll("'","").split(", ");
    }

    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div class="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> CDC SHOP</NavLink>
            
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/products">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li classname="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                   
                    {userInfo ? <div>Benvenuto {userInfo[1]}!</div> : <div><Login/><Registration/></div>}
                    <NavLink to="/cart" className="btn btn-outline-dark m-2"><i class="fa fa-shopping-cart m-1"></i> Cart </NavLink>
                    
                    
                
               
            </div>
            
        </nav>
        
    </>
    )
}

export default Navbar
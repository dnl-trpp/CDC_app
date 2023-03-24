import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from './Login'
import Registration from './Registration'


const Navbar = () => {
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div class="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> CDC SHOP</NavLink>
                <button class="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                   
                    <Login/>
                    <Registration/>
                    <NavLink to="/cart" className="btn btn-outline-dark m-2"><i class="fa fa-shopping-cart mr-1"></i> Cart </NavLink>
                    
                    
                </div>
               
            </div>
            
        </nav>
        
    </>
    )
}

export default Navbar
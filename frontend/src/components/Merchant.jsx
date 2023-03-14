import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const Merchant = () => {
    const navigate = useNavigate();
    const handleClick = () => navigate('/products');

    return (
        <div>
        <h1>Merchant Pannel</h1>

        <button type="button" onClick={handleClick}>
        Products List
        </button>
        
        </div>
    

   
    );
  };
  
  export default Merchant;
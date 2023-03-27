import * as React from 'react';
import { useState } from "react";

const AddCart = ({ product_id, user_id }) => {

    
    const [quantity] = useState(1);

     //function that insert product into cart
    const handleAddCart =  (e) => {
        e.preventDefault();
            fetch("http://localhost:8001/cart", {
            method: "POST",
            
            body: JSON.stringify({
              user_id,
              product_id,
              quantity: quantity,
            })
          })
          .then((response) => {
            if (response.status === 200) {
              alert("Product added to cart");
              
            }
          })
          .catch(error => console.log(error))
      };
      return(
        <button  type="button" class="btn btn-dark m-1" onClick={handleAddCart}>Add to Cart</button>
      );

};

export default AddCart;
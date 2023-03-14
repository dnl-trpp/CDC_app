import { useEffect, useState } from "react";


const Products = () => {
  const [products, setProducts] = useState([]);


  useEffect(()=>{
    fetch('http://localhost:8000/products',{
        'methods':'GET',
        headers : {
          'Content-Type':'application/json'
        }
      })
    .then(response => response.json())
    .then(response => setProducts(response))
    .catch(error => console.log(error))

  },[])

  return (
    <div>
   	    {products.map(product =>{
            return (

              <div key= {product.id}>
                <h2 className="text-primary"> { product.name} </h2>
                <p> {product.description } </p>
              <button type="button">
              Update 
              </button>
              <button type="button">
              Remove 
              </button>
    	        <hr/>
              </div>
            )
            
            })}
        </div>
        )
    }

export default Products;
import { useEffect, useState } from "react";

<<<<<<< HEAD

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
=======
export default function Products() {

  const [products, setProducts ] = useState([]);


  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_SERVICE_URL}/products`)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData)
        setProducts(responseData);
      });
  }, []);

  return (
    <>
      {products.map((product) => (
        <li className="list-product" id={product.id} key={product.id}>
          <b className="product">product: {product.name}</b>
          <b>Date: {product.description}</b>
        </li>
      ))}
    </>
  );
}
>>>>>>> c6a8bf513be531512db48d068479350ebe7464f9

import * as React from 'react';
import { useEffect, useState } from "react";
import  {Link} from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import AddProduct from "./AddProduct";



const ProductsMerchant = () => {
  const [products, setProducts] = useState([]);
 

  const [loading] = useState(false);


  useEffect(()=>{
    const getProducts = ()=>{

      fetch('http://localhost:8000/products',{
        'methods':'GET',
        headers : {
          'Content-Type':'application/json'
        }
      })
    .then(response => response.json())
    .then(response => setProducts(response))
    .catch(error => console.log(error))

    };
    getProducts();
    
  },[]);


const Loading = () => {
    return (
      <>
        <div class="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div class="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div class="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div class="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div class="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div class="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div class="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };
  const ShowProducts = () => {
    return (
      <>
      

        {products.map((product) => {
          return (
            <div id={product.id} key={product.id} class="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
              <div class="card text-center h-100" key={product.id}>
                <img
                  class="card-img-top p-3"
                  src={product.image}
                  alt="Card"
                  height={300}
                />
                <div class="card-body">
                  <h5 class="card-title">
                    {product.name}
                  </h5>
                </div>
            
                <div class="card-body">
                  <Link to={"/warehouse/" + product.id} class="btn btn-dark m-1">
                    Details
                  </Link>
                </div>
              </div>
            </div>

          );
        })}
      </>
    );
  };
 
  
  return (
    <>
      <div class="container my-3 py-3">
        <div class="row">
            <div class="col-4">
            <select class="form-select m-2" defaultValue={"default"} >
                <option value="default" disabled>Sort by</option>
                <option>Price - Lowest to Highest</option>
                <option>Price - Highest to Lowest</option>
                <option>Alphabet - A-Z</option>
                <option>Alphabet - Z-A</option>
            </select>
            </div>
            
            
            <div class="col-4 ">
                <AddProduct />
            </div>
            
            <hr />
          
        </div>
        <div class="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};



export default ProductsMerchant;
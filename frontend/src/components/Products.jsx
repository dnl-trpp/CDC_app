import { useEffect, useState } from "react";

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

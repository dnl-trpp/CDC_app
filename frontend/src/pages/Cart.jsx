import React, { useState, useEffect } from "react";
import { Footer, Navbar } from "../components";
import { Link, useParams } from "react-router-dom";

const Cart = () => {
    const {user_id} = useParams();

    const [productsCart, setProductsCart] = useState("");
    const [cart, setCart] = useState("");




    useEffect(() => {
        const getProductsCart = () => {
            fetch(`http://localhost:8001/cart?user_id=${user_id}`, {

                'methods': 'GET',
            })
                .then(response => response.json())
                .then(response => setProductsCart(response))
                .catch(err => {
                    console.log(err);
                })

        };
        getProductsCart();
    }, [user_id]);

   


 const DeleteProductCart =  (product_id) => {
       
        console.log(product_id);
        fetch(`http://localhost:8001/cart?user_id=${user_id}&product_id=${product_id}`, {
            method: "DELETE",
        })

            .then((response) => {
                if (response.status === 200) {
                    setProductsCart(productsCart.filter(product => product.id !== product_id));
                    setCart(cart.map(product => {
                        if (product.id === product_id) {
                            return {
                                ...product,
                                quantity: product.quantity - 1
                            };
                        } else {
                            return product;
                        }
                    }));
                    alert("Product deleted from cart successfully");
                    window.location.reload();
                }
            })
            .catch((error) => console.log(error));

    }



    const EmptyCart = () => {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 py-5 bg-light text-center">
                        <h4 className="p-3 display-5">Your Cart is Empty</h4>
                        <Link to="/" className="btn  btn-outline-dark mx-4">
                            <i className="fa fa-arrow-left"></i> Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        );
    };



    const ShowCart = () => {
        let subtotal = 0;
        let shipping = 30.0;
        let totalItems = 0;

        productsCart.map((item) => {
            return (subtotal += item.price * item.qty);
        });

        productsCart.map((item) => {

            return (totalItems += item.qty);
        });

        return (
            <>
                <section className="h-100 gradient-custom">
                    <div className="container py-5">
                        <div className="row d-flex justify-content-center my-4">
                            <div className="col-md-8">
                                <div className="card mb-4">
                                    <div className="card-header py-3">
                                        <h5 className="mb-0">Item List</h5>
                                    </div>
                                    <div className="card-body">
                                        {productsCart.map((product) => {
                                            return (
                                                <div key={product.id}>
                                                    <div className="row d-flex align-items-center">
                                                        <div className="col-lg-3 col-md-12">
                                                            <div
                                                                className="bg-image rounded"
                                                                data-mdb-ripple-color="light"
                                                            >
                                                                <img
                                                                    src={product.image_url}
                                                                    alt={product.name}
                                                                    width={100}
                                                                    height={75}
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-5 col-md-6">
                                                            <p>
                                                                <strong>{product.name}</strong>
                                                            </p>
                                                        </div>

                                                        <div className="col-lg-4 col-md-6">
                                                            <div
                                                                className="d-flex mb-4"
                                                                style={{ maxWidth: "300px" }}
                                                            >
                                                                <button className="btn px-3" value={product.id} onClick={DeleteProductCart}>

                                                                    <i className="fa fa-minus"></i>
                                                                </button>

                                                                <p className="mx-5">{product.quantity}</p>

                                                                <button
                                                                    className="btn px-3"
                                                                >
                                                                    <i className="fa fa-plus"></i>
                                                                </button>
                                                            </div>

                                                            <p className="text-start text-md-center">
                                                                <strong>
                                                                    <span className="text-muted">{product.quantity}</span>{" "}
                                                                    x ${product.price}
                                                                </strong>
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <hr className="my-4" />
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4">
                                    <div className="card-header py-3 bg-light">
                                        <h5 className="mb-0">Order Summary</h5>
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                                Products ({totalItems})<span>${Math.round(subtotal)}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                                Shipping
                                                <span>${shipping}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                                <div>
                                                    <strong>Total amount</strong>
                                                </div>
                                                <span>
                                                    <strong>${Math.round(subtotal + shipping)}</strong>
                                                </span>
                                            </li>
                                        </ul>

                                        <Link
                                            to="/checkout"
                                            className="btn btn-dark btn-lg btn-block"
                                        >
                                            Go to checkout
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    };

    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Cart</h1>
                <hr />
                {productsCart.length > 0 ? <ShowCart /> : <EmptyCart />}
            </div>
            <Footer />
        </>
    );
};

export default Cart;
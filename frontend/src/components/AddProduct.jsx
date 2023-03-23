import React from "react";
import { useState } from "react";




const AddProduct = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [image_url, setImageUrl] = useState("");
    const [message, setMessage] = useState("");
    
  
   
    const handleSubmit =  (e) => {
      e.preventDefault();
          fetch("http://localhost:8000/products", {
          method: "POST",
          
          body: JSON.stringify({
            name: name,
            description: description,
            category: category,
            price: price,
            stock: stock,
            image_url: image_url,
          })
        })
        .then(response => response.json())
        .then(setName(""))
        .then(setDescription(""))
        .then(setCategory(""))
        .then(setPrice(""))
        .then(setStock(""))
        .then(setImageUrl(""))
        .then(setMessage("Product Added"))
        .catch(error => console.log(error))
        window.location.reload();//perchè volevo che al click aggiornasse la pagina per visualizzare il nuovo prodotto
    };


    return (
      
      <>
      
      <button type="button" class="btn btn-dark m-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add Product
      </button>


      <div class="modal fade bg-dark" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Add Product</h5>
              <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <form onSubmit={handleSubmit}>
                    <input type="hidden" name="_token" value=""></input>
                    <div class="form-group">
                        <label class="control-label">Name</label>
                        <div>
                            <input type="text" class="form-control " placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}></input>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label">Description</label>
                        <div>
                        <input type="text" class="form-control " placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></input>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label">Category</label>
                        <div>
                        <input type="text" class="form-control " placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)}></input>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label">Price</label>
                        <div>
                        <input type="number" class="form-control " placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)}></input>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label">Stock</label>
                        <div>
                        <input type="number" class="form-control " placeholder="Stock" value={stock} onChange={(e) => setStock(e.target.value)}></input>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label">Image_url</label>
                        <div>
                        <input type="text" class="form-control " placeholder="Image_url" value={image_url} onChange={(e) => setImageUrl(e.target.value)}></input>
                        </div>
                    </div>
                    <div class="message">{message ? <p>{message}</p> : null}</div>
            </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" onClick={(e) => handleSubmit(e)}>Add</button>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  };
  
  export default AddProduct;
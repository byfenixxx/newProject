import React, { useState } from 'react';
import "./AddProduct.css"

const AddProduct = ({addProduct}) => {

  const [product, setProduct] = useState({
    title: "",
    price: "",
    image: "",
  })

  const handleValues = (e) => {
    let newProduct = {
      ...product,
      [e.target.name]: e.target.value
    }
    setProduct(newProduct);
  }


  return (
    <div>
      <input type="text" placeholder="Title" onChange={handleValues} name="title" />
      <input type="text" placeholder="Price" onChange={handleValues} name="price" />
      <input type="text" placeholder="Image" onChange={handleValues} name="image" />
      <button onClick={() => addProduct(product)} >Add new product</button>
    </div>
  );
};

export default AddProduct;
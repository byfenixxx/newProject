import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddProductPage from './pages/AddProductPage';
import MainPage from './pages/MainPage';
import "./App.css";

const App = () => {

  const [products, setProducts] = useState([]);

  function addProduct(product) {

    setProducts([...products, product]);

    console.log("Product", product);
    console.log("Products", products);
    
  }

  return (
    <div className="container">
      <BrowserRouter >
      <h1>It is header</h1>
        <Routes>
          <Route path="/" element={<MainPage products={products} />} />
          <Route path="/add_product" element={<AddProductPage addProduct={addProduct} />} />
        </Routes>
        <h1>It is footer</h1>
      </BrowserRouter>
    </div>
  );
};

export default App;



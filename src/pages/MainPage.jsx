import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const MainPage = ({ products }) => {
  return (
    <div>
      <Link to="/add_product"><button>Add new product</button></Link>
      <ProductCard products={products} />
    </div>
  );
};

export default MainPage;
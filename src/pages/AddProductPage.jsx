import React from 'react';
import { Link } from 'react-router-dom';
import AddProduct from '../components/AddProduct';

const AddProductPage = ({addProduct}) => {
  return (
    <div>
      <Link to="/"><button style={{height: 20, fontSize: 5, width: 50}}>Go to main page</button></Link>
      <AddProduct addProduct={addProduct} />
    </div>
  );
};

export default AddProductPage;
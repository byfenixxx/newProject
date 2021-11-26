import React from 'react';

const ProductCard = ({ products }) => {
  return (
    <div>
      {products.map(item => (
        <div style={{border: "2px solid", width: 200}}>
          <div>{item.title}</div>
          <div>{item.price}</div>
          <img src={item.image} alt="..." />
          <button>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
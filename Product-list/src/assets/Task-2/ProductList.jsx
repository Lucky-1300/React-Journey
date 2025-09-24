import React from "react";
import "./ProductList.css";

const ProductList = ({ items }) => {
  return (
    <div className="product-list">
      {items.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} width={200} />
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

import React from "react";

const Product = ({ product, addToBasket }) => {

  const handleAddToBasket = () => {
    addToBasket(product);
  };

  return (
    <div className="productBox">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <h3>£{product.price}</h3>
      <button onClick={handleAddToBasket}>Add to basket</button>
      <br/>
      <br/>
    </div>
  );
};

export default Product;

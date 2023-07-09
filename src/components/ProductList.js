import React from "react";
import Product from "./Product";

const ProductList = ({ products, addToBasket }) => {
  
  const allProducts = products.map((product) => {
    return (
      <Product key={product.id} product={product}  addToBasket={addToBasket} />

    );
  });

  return (
    <div>
      <div className="productsContainer">
      {allProducts}
      </div>
    </div>
  );
};

export default ProductList;

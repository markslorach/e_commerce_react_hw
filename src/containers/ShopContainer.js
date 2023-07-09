import React from "react";
import ProductList from "../components/ProductList";

const ShopContainer = ({ basket, setBasket, products }) => {

  const addToBasket = (product) => {
    setBasket([...basket, product]);
  };

  return (
    <div>
      <h1>Break 'a' Leg!</h1>
      <ProductList products={products} addToBasket={addToBasket} />
    </div>
  );
};

export default ShopContainer;

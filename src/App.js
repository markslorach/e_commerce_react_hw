import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopContainer from "./containers/ShopContainer";
import Basket from "./components/Basket";
import NavBar from "./components/NavBar";
import productData from "./data/productData";

function App() {
  const [basket, setBasket] = useState([]);

  return (
    <Router>
      <NavBar basket={basket} />
      <Routes>
        <Route
          path="/"
          element={
            <ShopContainer
              basket={basket}
              setBasket={setBasket}
              products={productData}
            />
          }
        />
        <Route path="/basket" element={<Basket basket={basket} />} />
      </Routes>
    </Router>
  );
}

export default App;

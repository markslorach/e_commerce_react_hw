import React, { useState } from "react";

const Basket = ({ basket }) => {
  const [discountCode, setDiscountCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const basketTotal = basket.reduce((total, item) => total + item.price, 0);

  const basketItems = basket.map((item) => (
    <p key={item.id}>
      <b>{item.name}</b> <br />£{item.price}
    </p>
  ));

  const handleDiscountCode = (event) => {
    setDiscountCode(event.target.value);
  };

  const handleApplyDiscount = () => {
    if (discountCode === "BREAKALEG") {
      setDiscount(basketTotal * 0.1);
    } else {
      setDiscount(0);
    }
  };

  return (
    <div>
      <h1>Basket</h1>
      {basketItems}
      <hr/>
      <p><b>Subtotal:</b> £{basketTotal.toFixed(2)}</p>
      <p><b>Discount:</b> -£{discount.toFixed(2)}</p>
      <p><b>Total:</b> £{basketTotal - discount.toFixed(2)}</p>
      <p>Enter <strong>BREAKALEG</strong> for 10% discount</p>
      <input
        type="text"
        value={discountCode}
        onChange={handleDiscountCode}
        placeholder="Enter discount code"
      />
      <button onClick={handleApplyDiscount}>Apply</button>
    </div>
  );
};

export default Basket;

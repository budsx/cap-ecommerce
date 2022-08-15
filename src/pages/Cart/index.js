import React from 'react';

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart-header">
        <h1>Order</h1>
      </div>
      <div className="cart-product-head">
        <h3>Product</h3>
        <h3>Total</h3>
      </div>
      <div className="cart-body">
        <div className="cart-detail">
          <img
            className="cart-img"
            src="https://images-platform.99static.com//7VDQLeaeWN0pK5kN2Zvy09IAs_U=/133x180:1066x1113/fit-in/500x500/99designs-contests-attachments/114/114421/attachment_114421549"
            alt=""
          />
          <div className="cart-description">
            <p>White Roasters Coffe - Regular Coffe</p>
            <h4>$19.99</h4>
            <input type="number" min="1" value="" className="inputnumber" />
          </div>
        </div>
        <div className="cart-total">
          <h4>$19.99</h4>
        </div>
      </div>
      <div className="cart-body">
        <div className="cart-detail">
          <img
            className="cart-img"
            src="https://images-platform.99static.com//7VDQLeaeWN0pK5kN2Zvy09IAs_U=/133x180:1066x1113/fit-in/500x500/99designs-contests-attachments/114/114421/attachment_114421549"
            alt=""
          />
          <div className="cart-description">
            <p>White Roasters Coffe - Regular Coffe</p>
            <h4>$19.99</h4>
            <input type="number" min="1" value="" className="inputnumber" />
          </div>
        </div>
        <div className="cart-total">
          <h4>$19.99</h4>
        </div>
        <div className="cart-subtotal">
          <h3>Subtotal</h3>
        </div>
        <div className="cart-subtotal">
          <h4>$19.99</h4>
        </div>
      </div>
    </div>
  );
};

export default Cart;

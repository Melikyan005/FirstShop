import React, { useState } from "react";
import ProductCart from "../../components/ProductCart/ProductCart";
import "./Cart.css";

const Cart = ({ cartData, minusCount, plusCount, removeCartProduct,removeAll }) => {
  const [totalPrice, setTotalPrice] = useState(0);

function clearCart(){
  removeAll()
}
  return (
    <div className="cart">
     <div className="cartSettings">
     <span className="cartPrice">
          Total price &ensp;
          {cartData.reduce((acum, el) => {
            return acum + el.initPrice;
          }, 0)}
        </span>
        <button onClick={clearCart}>Delete All</button>
     </div>
      <div className="carts">
        {cartData[0]?cartData.map((el) => (
          <ProductCart
            minusCount={minusCount}
            plusCount={plusCount}
            removeCartProduct={removeCartProduct}
            key={el.id}
            item={el}
          />
        )):<span>Cart is Empty</span>}
        
      </div>
    </div>
  );
};

export default Cart;

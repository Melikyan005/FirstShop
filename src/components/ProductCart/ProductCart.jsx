import React from "react";
import "./ProductCart.css";

const ProductCart = ({ item,minusCount,plusCount,removeCartProduct }) => {
  

  function minus(item){
    minusCount(item)
  }

  function plus(item){
    plusCount(item)
  }

  function remove(id){
    removeCartProduct(id)
  }


  return (
    <div className="productCart">
      <div className="product">
        <img src={item.image} alt="" />
        <div className="aboutProduct">
          <h3>
            {item.title.length < 20
              ? item.title
              : `${item.title.slice(0, 20)}...`}
          </h3>
          <span>{`${item.price} $`}</span>
        </div>
      </div>
      <div className="count">
        <button onClick={()=>minus(item)}>-</button>
        <span>{item.count}</span>
        <button onClick={()=>plus(item)}>+</button>
      </div>
      <div className="init-delete">
        <span>{item.initPrice}</span>
        <button onClick={()=>remove(item.id)}>{`x  Delete`}</button>
      </div>
    </div>
  );
};

export default ProductCart;

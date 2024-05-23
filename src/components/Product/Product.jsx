import React from "react";
import"./Product.css"

const Product = ({ item }) => {
  return (
    <div className="product-simple">
      <img src={item.image} alt="" />
    <div className="aboutProduct">
    <h1>{item.title}</h1>
      <span>{`${item.price} $`}</span>
    </div>
    </div>
  );
};

export default Product;

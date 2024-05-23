import React from "react";
import "./ProductCard.css";
import { NavLink } from "react-router-dom";

const ProductCard = ({ product, addTocart }) => {
  function addItem(item) {
    addTocart(item);
  }

  return (
    <div className="productCard">
      <NavLink to={`/products/${product.id}`}>
        <img src={product.image} alt="" />
      </NavLink>
      {
        <h4>
          {product.title.length > 20
            ? `${product.title.slice(0, 25)}...`
            : product.title}
        </h4>
      }

      <span>{`${product.price} $`}</span>
      <button onClick={() => addItem(product)} className="addCartBtn">
        Добавить в корзину
      </button>
    </div>
  );
};

export default ProductCard;

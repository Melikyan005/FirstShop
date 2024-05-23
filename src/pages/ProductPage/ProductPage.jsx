import React from "react";
import { useParams } from "react-router";
import Product from "../../components/Product/Product";

const ProductPage = ({ products }) => {
  const { id } = useParams();

  const item = products.filter((elem) => +id === elem.id);
  console.log(item);
  return <Product item={item[0]} />;
};

export default ProductPage;

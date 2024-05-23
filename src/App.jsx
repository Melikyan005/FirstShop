import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import ProductPage from "./pages/ProductPage/ProductPage";
import { useState } from "react";

function App({ products }) {
  const [cartData, setcartData] = useState([]);

  function addTocart(item) {
    let addedBool = false;

    cartData.forEach((elem) => {
      if (elem.id === item.id) {
        addedBool = true;
        setcartData((prev) => {
          return prev.map((el) => {
            if (el.id === item.id) {
              return {
                ...el,
                count: ++el.count,
                initPrice: item.price * el.count,
              };
            } else {
              return el;
            }
          });
        });
      }
    });

    if (!addedBool) {
      setcartData((prev) => {
        return [...prev, item];
      });
    }
  }

  function minusCount(item) {
    setcartData((prev) => {
      return prev.map((el) => {
        if (el.id === item.id && el.count > 1) {
          return {
            ...el,
            count: --el.count,
            initPrice: el.count * el.price,
          };
        }else{return el}
      });
    });
  }

  function plusCount(item) {
    setcartData((prev) => {
      return prev.map((el) => {
        if (el.id === item.id ) {
          return {
            ...el,
            count: ++el.count,
            initPrice: el.count * el.price,
          };
        }else{return el}
      });
    });
  }

  function removeCartProduct(id){
setcartData((prev)=>{
 return cartData.filter((el)=>{
    return el.id!==id
  })
})
  }

  function removeAll(){
    setcartData([])
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout cartData={cartData} />}>
          <Route index element={<Home />} />
          <Route
            path="/products"
            element={<Products addTocart={addTocart} products={products} />}
          />
          <Route
            path="/products/:id"
            element={<ProductPage products={products} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                minusCount={minusCount}
                plusCount={plusCount}
                removeCartProduct={removeCartProduct}
                cartData={cartData}
                removeAll={removeAll}
              />
            }
          />

          <Route />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

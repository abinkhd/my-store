import React, { useEffect, useState } from "react";
import axios from "axios";
import MyCard from "./common/Card";
import Header from "./common/Header";
import { useDispatch, useSelector } from "react-redux";

const Store = () => {
  const [products, setProducts] = useState([]);
  const cart = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const getProducts = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setProducts(result.data);
  };

  useEffect(() => {
    try {
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }, []);
console.log(products)
  return (
    <>
      <Header items={cart} />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((p) => (
          <MyCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
};

export default Store;

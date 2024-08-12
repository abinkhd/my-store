import React from "react";

const Header = ({ items }) => {
   const totalSum= Math.round(items.reduce((acc,i)=>acc+i.price*i.qty,0)*100)/100
    console.log(totalSum);
  return (
    <div
      style={{
        background: "#495059db",
        padding: "25px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <span>Price:{totalSum}</span>
      <h4>Shopping cart</h4>
      <span>Cart Items:{items.length}</span>
    </div>
  );
};

export default Header;

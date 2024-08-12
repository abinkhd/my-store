import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/shoppingAction";

const MyCard = ({ product }) => {
  const dispatch = useDispatch();
  const  [quantity,setQuantity]=useState(1);
  return (
    <Card
      style={{
        height: "500px",
        width: "18rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <Card.Img
        style={{ height: "200px", padding: "30px" }}
        variant="top"
        src={product.image}
      />
      <Card.Body>
        <Card.Title style={{ padding: "10px" }}>{product.title}</Card.Title>
        <Card.Text style={{ padding: "10px" }}>
          Price : {product.price}
        </Card.Text>
        <Button
          onClick={() =>
            dispatch(
              addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    qty:quantity
                  }
              )
            )
          }
          style={{ margin: "10px" }}
          variant="primary"
        >
          Add To Cart
        </Button>
        Quantity:
        <input type="number" style={{width:'50px'}} onChange={e=>setQuantity(Number(parseInt(e.currentTarget.value)))}/>
      </Card.Body>
    </Card>
  );
};

export default MyCard;

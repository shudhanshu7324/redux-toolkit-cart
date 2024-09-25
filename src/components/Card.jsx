import React from "react";
import "./Card.css";
import { addToCart } from "../slices/cartslice";
import {useDispatch } from "react-redux";

const Card = ({ item }) => {

  const dispatch = useDispatch()


  return (
    <div className="card-component">
      <div className="card">
        <h2>{item.title}</h2>
        <p>{item.price}</p>
        <p>{item.description}</p>
        <img src={item.image} alt="product-img" />
        <button
          style={{
            height: "30px",
            width: "150px",
            backgroundColor: "pink",
            borderRadius: "10px",
            cursor: "pointer",
            border: "none",
            color: "white",
            fontWeight: "800",
          }}
          onClick={()=>dispatch(addToCart(item))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;

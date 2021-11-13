import { ListGroup, ListGroupItem } from "reactstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import React from "react";

export const Cart = (props) => {
  return (
    <>
      <ListGroup className="items">
        <h2 className="cart-items-title">Your Cart Items</h2>
        {/* eslint-disable-next-line */}
        {props.itemList.map((item) => {
          if (item.quantity > 0) {
            return (
              <ListGroupItem key={item.id} className="item">
                <div className="item-title-img">
                  <img
                    src={item.picture}
                    alt={item.title}
                    height="150"
                    width="150"
                  />
                  <p className="cart-title">{item.title}</p>
                </div>
                <div className="item-quantity">
                  <p className="quantity-text cart-bold">
                    Quantity: {item.quantity}
                  </p>
                </div>
              </ListGroupItem>
            );
          }
        })}
      </ListGroup>
      <Checkout totalQuantity={props.totalQuantity} />
    </>
  );
};

const Checkout = ({ totalQuantity }) => {
  return totalQuantity > 0 ? (
    <div className="items checkout-btn">
      <Link to="/signin">
        <button className="btn btn-primary" id="cartBtn">
          Check Out
        </button>
      </Link>
    </div>
  ) : (
    <div className="cart-number-items">
      <h4>There are 0 items in your cart.</h4>
      <Link to="/">
        <button className="btn btn-success cart-btn">Continue Shop</button>
      </Link>
    </div>
  );
};

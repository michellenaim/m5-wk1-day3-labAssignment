import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup, ListGroupItem } from "reactstrap";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";

class ShoppingApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: "Unisex Cologne",
          picture: "/products/cologne.jpg",
          quantity: 0,
        },
        {
          id: 2,
          title: "Apple iWatch",
          picture: "/products/iwatch.jpg",
          quantity: 0,
        },
        {
          id: 3,
          title: "Unique Mug",
          picture: "/products/mug.jpg",
          quantity: 0,
        },
        {
          id: 4,
          title: "Men's wallet",
          picture: "/products/wallet.jpg",
          quantity: 0,
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <div className="header items">
          <h2>Shop to React</h2>
          <div className="shopping-cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            <p className="number-cart">
              {this.state.items
                .map((item) => item.quantity)
                .reduce((acc, curr) => acc + curr, 0)}{" "}
              items
            </p>
          </div>
        </div>
        <Item itemList={this.state.items} />
      </div>
    );
  }
}

function Item(props) {
  return (
    <ListGroup className="items">
      {props.itemList.map((item) => (
        <ListGroupItem key={item.id} className="item">
          <div className="item-title-img">
            <h4>{item.title}</h4>
            <img src={item.picture} alt={item.title} height="150" width="150" />
          </div>
          <div className="item-quantity">
            <span className="quantity">{item.quantity}</span>
            <p className="quantity-text">quantity</p>
          </div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}

export default ShoppingApp;

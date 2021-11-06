import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { products } from "./products";
import { NavBar } from "./Navbar";

class ShoppingApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: products,
    };
  }

  handleIncrease = (item) => {
    const updateQuantity = item.quantity++;
    this.setState({ updateQuantity });
  };

  handleDecrease = (item) => {
    if (item.quantity > 0) {
      const updateQuantity = item.quantity--;
      this.setState({ updateQuantity });
    }
  };

  render() {
    return (
      <div>
        <NavBar
          itemList={this.state.items}
          handleIncrease={this.handleIncrease}
          handleDecrease={this.handleDecrease}
        />
      </div>
    );
  }
}

export default ShoppingApp;

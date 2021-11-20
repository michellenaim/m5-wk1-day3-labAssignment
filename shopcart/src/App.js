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
      sortType: "normal",
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

  sortPrice = (items, sortType) => {
    items.sort((a, b) => {
      switch (sortType) {
        case "normal":
          return a.id > b.id ? 1 : -1;
        case "lowest":
          return a.price < b.price ? -1 : 1;
        case "highest":
          return a.price < b.price ? 1 : -1;
        default:
          return a.id > b.id ? 1 : -1;
      }
    });
    this.setState({ sortType });
  };

  render() {
    return (
      <div>
        <NavBar
          itemList={this.state.items}
          handleIncrease={this.handleIncrease}
          handleDecrease={this.handleDecrease}
          totalQuantity={this.state.items
            .map((item) => item.quantity)
            .reduce((acc, curr) => acc + curr, 0)}
          sortPrice={this.sortPrice}
        />
      </div>
    );
  }
}

export default ShoppingApp;

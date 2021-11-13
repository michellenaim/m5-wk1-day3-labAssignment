import React from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  faShoppingCart,
  faRegistered,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from "./Home";
import { Cart } from "./Cart";
import Login from "./Login";

export const NavBar = (props) => {
  return (
    <div>
      <Router>
        <div className="header items">
          <h2>
            <Link to="/" className="titleLogo">
              Shop 2{" "}
              <FontAwesomeIcon icon={faRegistered} className="fas fa-lg" />
              eact
            </Link>
          </h2>
          <div className="shopping-cart">
            <Link to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
            <p className="number-cart">{props.totalQuantity} items</p>
          </div>
        </div>

        <Switch>
          <Route exact path="/">
            <Home
              itemList={props.itemList}
              handleIncrease={props.handleIncrease}
              handleDecrease={props.handleDecrease}
            />
          </Route>
          <Route path="/cart">
            <Cart
              itemList={props.itemList}
              totalQuantity={props.totalQuantity}
            />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

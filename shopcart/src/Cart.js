import { ListGroup, ListGroupItem } from "reactstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Cart = (props) => {
  return (
    <ListGroup className="items">
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
  );
};

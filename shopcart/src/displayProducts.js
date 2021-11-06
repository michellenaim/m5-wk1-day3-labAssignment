import React, { useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Modal } from "react-bootstrap";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Items = (props) => {
  const [show, setShow] = useState(false);
  const [showImage, setShowImage] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setShow(true);
    setShowImage(item);
  };

  return (
    <ListGroup className="items">
      {props.itemList.map((item) => (
        <ListGroupItem key={item.id} className="item">
          <div className="item-title-img">
            <h4>{item.title}</h4>
            <img
              src={item.picture}
              alt={item.title}
              height="150"
              width="150"
              onClick={() => handleShow(item)}
            />
          </div>
          <div className="increment-buttons">
            <button onClick={() => props.handleIncrease(item)}>
              <FontAwesomeIcon icon={faPlusCircle} />
            </button>
            <button onClick={() => props.handleDecrease(item)}>
              <FontAwesomeIcon icon={faMinusCircle} />
            </button>
          </div>
          <div className="item-quantity">
            <span className="quantity">{item.quantity}</span>
            <p className="quantity-text">quantity</p>
          </div>
        </ListGroupItem>
      ))}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{showImage.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={showImage.picture}
            width="350"
            alt={showImage.title}
            className="mx-5"
          />
          <p>
            <span className="text-dark">Ratings:</span> {showImage.rating}/5
          </p>
        </Modal.Body>
      </Modal>
    </ListGroup>
  );
};

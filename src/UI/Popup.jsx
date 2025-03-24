import React, { useEffect } from "react";
import "./Popup.css";
import ReactDom from "react-dom";

import { useContext } from "react";
import CartContext from "../store/cart-context";

const Popup = (props) => {
  const { items, totalAmount,addItem,removeItem } = useContext(CartContext);

  const addItemHandler = (item) => {
    addItem({
      id: item.id,
      name: item.name,
      amount: 1,
      price: item.price
    })
  }


  useEffect(() => {
    console.log(items);
  }, [items]);


  return ReactDom.createPortal(
    <div className="popup-Box" onClick={props.onClose}>
      <div className="pop-cart" onClick={(e) => e.stopPropagation()}>
        <div className="pop-cart-header">
          <h2 className="pop-cart-title">Cart</h2>
          <button
            onClick={props.onClose}
            className="pop-cart-close-btn"
            aria-label="Close cart"
          >
            ×
          </button>
        </div>

        {items.map((item) => {
          return (
            <li className="meal">
              <div className="box-cart">
                <div>
                  <h3>{item.name}</h3>
                  <div className="price">{item.price}</div>
                </div>
                <h3>X{item.amount}</h3>
              </div>
              <div className="buttons-in-popup">
                <button className="button" onClick={()=>removeItem(item.id)}>- </button>
                <button className="button" onClick={()=>addItemHandler(item)} >+ </button>
              </div>
            </li>
          );
        })}

        <div className="pop-cart-content">
          <div className="pop-cart-total">
            <span className="pop-cart-total-label">Total:</span>
            <span className="pop-cart-total-amount">{ items.length>0 ? (totalAmount.toFixed(3)):"00.00"}</span>
          </div>
        </div>

        <div className="pop-cart-footer">
          <button
            className="pop-cart-btn pop-cart-close"
            onClick={props.onClose}
          >
            Close
          </button>
          <button
            className="pop-cart-btn pop-cart-order"
            onClick={props.onClose}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("popup")
  );
};

export default Popup;

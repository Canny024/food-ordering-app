import React, { useContext } from "react";
import CartContext from "../../store/card-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

export default function Cart(props) {
  const cartctx = useContext(CartContext);

  const totalAmount = `$${cartctx.totalAmount.toFixed(2)}`;

  const cartItemAddHandler =(item)=>{

    cartctx.addItem({...item,amount:1})
  }

  const cartItemRemoveHandler =(id)=>{
    cartctx.removeItem(id);
  }

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null,item.id)}
          onAdd={cartItemAddHandler.bind(null,item)}
        />
      ))}
    </ul>
  );

  const hasItems = cartctx.items.length > 0;

  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["buton--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

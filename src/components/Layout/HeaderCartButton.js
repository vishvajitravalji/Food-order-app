import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartProvider from "../../store/CartProvider";

const HeaderCartButton = (props) => {

  const cartCrx = useContext(CartProvider)

  const numberOfCartItem = cartCrx.item.reducer((curNumber, item )=>{
    return curNumber + item.amount;
  } , 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;

import { Fragment } from "react";
import HeaderCartButton from './HeaderCartButton'

import mealImage from "../../assets/meals.jpg";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="Delicious Food" />
      </div>
    </Fragment>
  );
};

export default Header;

import React from "react";
import classes from "./CheckoutSummary.module.css";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

const checkoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>It's gonna be deliciuos!</h1>
      <div className={classes.BurgerWrap}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button buttonType="Danger" clicked={props.checkoutCancelled}>Cancel</Button>
      <Button buttonType="Success" clicked={props.checkoutContinued}>Continue</Button>
    </div>
  );
};

export default checkoutSummary;

import React from "react";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(
    ingredientKey => {
      return (
        <li key={ingredientKey}>
          <span style={{ textTransform: "capitalize" }}>{ingredientKey}</span>:{" "}
          {props.ingredients[ingredientKey]}
        </li>
      );
    }
  );

  return (
    <React.Fragment>
      <h3>Tour order:</h3>
      <p>You've composed burger with:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue</p>
      <Button buttonType="Danger" clicked={props.purchaseCancelled}>
        Cancel
      </Button>
      <Button buttonType="Success" clicked={props.purchaseContinued}>
        Continue
      </Button>
    </React.Fragment>
  );
};

export default orderSummary;

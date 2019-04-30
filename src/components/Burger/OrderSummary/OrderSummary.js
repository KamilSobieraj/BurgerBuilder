import React from "react";

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
    </React.Fragment>
  );
};

export default orderSummary;

import React from "react";
import classes from "./BuildControl.module.css";

const buildControl = props => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>
      {props.label} (${props.price})
    </div>
    <button
      className={classes.Less}
      onClick={props.removed}
      disabled={props.disabled}
    >
      Less
    </button>
    <button className={classes.More} onClick={props.added}>
      More
    </button>
    <div className={classes.IngredientCounter}>{props.ingredientCount}</div>
  </div>
);
export default buildControl;

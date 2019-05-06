import React from "react";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const layout = props => (
  <React.Fragment>
    <Toolbar />
    <div>SideDrawer, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </React.Fragment>
);

export default layout;

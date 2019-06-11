import React, { Component } from "react";
import { Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Chekcout/Checkout";

class App extends Component {
  render() {
    return (
      <Layout>
        <Route path="/checkout" component={Checkout} />
        <Route path="/" exact component={BurgerBuilder} />
        {/* <BurgerBuilder />
        <Checkout /> */}
      </Layout>
    );
  }
}

export default App;

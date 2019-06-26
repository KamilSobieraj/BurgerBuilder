import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  // state = {
  //   ingredients: { salad: 1, meat: 1, cheese: 1, bacon: 1 }
  // };
  // componentDidMount() {
  //   const query = new URLSearchParams(this.props.location.search);
  //   const ingredients = {};
  //   for (let param of query.entries()) {
  //     //['salad','1']
  //     ingredients[param[0]] = +param[1];
  //   }
  //   this.setState({ ingredients });
  // }
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };
  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };
  render() {
    return (
      <React.Fragment>
        <CheckoutSummary
          ingredients={this.props.ings}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          component={ContactData}
          //render={() => <ContactData ingredients={this.props.ings} />}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients
  };
};

export default connect(mapStateToProps)(Checkout);

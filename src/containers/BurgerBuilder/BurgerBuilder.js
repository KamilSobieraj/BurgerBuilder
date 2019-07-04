import React, { Component } from "react";
import { connect } from "react-redux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import * as burgerBuilderActions from "../../store/actions/index";

class BurgerBuilder extends Component {
  state = {
    //purchasable: false,
    purchasing: false
  };

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(ingredientKey => {
        return ingredients[ingredientKey];
      })
      .reduce((sum, e) => {
        return sum + e;
      }, 0);
    return sum > 0;
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };
  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };
  purchaseContinueHandler = () => {
    // const queryParams = [];
    // for (let i in this.props.ings) {
    //   queryParams.push(
    //     encodeURIComponent(i) + "=" + encodeURIComponent(this.props.ings[i])
    //   );
    // }
    // const queryString = queryParams.join("&");
    this.props.history.push("/checkout");
  };
  render() {
    const disabledInfo = {
      ...this.props.ings
    };
    //this loop wiell outut true/false value
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    } // => e.g. {salad: true, meat:false, cheese: false}

    return (
      <React.Fragment>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
            ingredients={this.props.ings}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
            totalPrice={this.props.price}
          />
        </Modal>
        <Burger ingredients={this.props.ings} />
        <BuildControls
          ingredientAdded={this.props.onAddIngredient}
          ingredientRemoved={this.props.onRemoveIngredient}
          disabled={disabledInfo}
          price={this.props.price}
          ingredientsPrices={this.props.ingsPrices}
          ingredientsCount={this.props.ings}
          purchasable={this.updatePurchaseState(this.props.ings)}
          ordered={this.purchaseHandler}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice,
    ingsPrices: state.ingredientsPrices
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddIngredient: ingName =>
      dispatch(burgerBuilderActions.addIngredient(ingName)),
    onRemoveIngredient: ingName =>
      dispatch(burgerBuilderActions.removeIngredient(ingName))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BurgerBuilder);

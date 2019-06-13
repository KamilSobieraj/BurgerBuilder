import React, { Component } from "react";
import classes from "./ContactData.module.css";
import Button from "../../../components/UI/Button/Button";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: { type: "text", placeholder: "Your Name" },
        value: ""
      },
      street: {
        elementType: "input",
        elementConfig: { type: "text", placeholder: "Street" },
        value: ""
      },
      zipCode: {
        elementType: "input",
        elementConfig: { type: "text", placeholder: "Postal Code" },
        value: ""
      },
      country: {
        elementType: "input",
        elementConfig: { type: "text", placeholder: "Country" },
        value: ""
      },
      email: {
        elementType: "input",
        elementConfig: { type: "email", placeholder: "Your E-mail" },
        value: ""
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" }
          ]
        },
        value: ""
      }
    }
  };

  orderHandler = e => {
    e.preventDefault();
    console.log(this.props.ingredients);
  };
  inputChangedHandler = (e, inputIdentifier) => {
    const updatedOrderForm = { ...this.state.orderForm };
    const updatedFormElement = { ...updatedOrderForm[inputIdentifier] };
    updatedFormElement.value = e.target.value;
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    this.setState({ orderForm: updatedOrderForm });
  };
  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({ id: key, config: this.state.orderForm[key] });
    }
    let form = (
      <form>
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            changed={e => this.inputChangedHandler(e, formElement.id)}
          />
        ))}
        <Button buttonType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    return (
      <div className={classes.ContactData}>
        <h4>Fill The Form With Your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;

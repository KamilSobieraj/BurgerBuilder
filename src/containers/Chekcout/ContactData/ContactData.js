import React, { Component } from "react";
import classes from "./ContactData.module.css";
import Button from "../../../components/UI/Button/Button";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    }
  };

  orderHandler = e => {
    e.preventDefault();
    console.log(this.props.ingredients);
  };
  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Fill The Form With Your Contact Data</h4>
        <form>
          <Input
            inputtype="input"
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <Input
            inputtype="input"
            type="email"
            name="email"
            placeholder="Your E-mail"
          />
          <Input
            inputtype="input"
            type="text"
            name="street"
            placeholder="Street"
          />
          <Input
            inputtype="input"
            type="text"
            name="postalCode"
            placeholder="Postal Code"
          />
          <Button buttonType="Success" clicked={this.orderHandler}>
            ORDER
          </Button>
        </form>
      </div>
    );
  }
}

export default ContactData;

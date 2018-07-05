import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

export default class ChangeProductByID extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      id: -1,
      name: "",
      category: "",
      price: -1
    };
    this.handleChangeID = this.handleChangeID.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeID(event) {
    this.setState({
      id: event.target.value
    });
  }

  handleChangeName(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleChangeCategory(event) {
    this.setState({
      category: event.target.value
    });
  }

  handleChangePrice(event) {
    this.setState({
      price: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("https://localhost:44326/api/Products/" + this.state.id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: this.state.id,
        name: this.state.name,
        category: this.state.category,
        price: this.state.price
      })
    });
  }

  render() {
    return (
      <div className="FormContainer">
        <h2>Update Product in Database</h2>
        <Form inline>
          <FormGroup className="mr-sm-2">
            <Label for="ID" className="mr-sm-2">
              Product ID
            </Label>
            <Input
              id="ID"
              onChange={this.handleChangeID}
              placeholder="Type ID of the Product"
            />
          </FormGroup>
          <FormGroup className="mr-sm-2">
            <Label for="Name" className="mr-sm-2">
              Name
            </Label>
            <Input
              id="Name"
              onChange={this.handleChangeName}
              placeholder="Type product name"
            />
          </FormGroup>
          <FormGroup className="mr-sm-2">
            <Label for="Category" className="mr-sm-2">
              Category
            </Label>
            <Input
              id="Category"
              onChange={this.handleChangeCategory}
              placeholder="Type product category"
            />
          </FormGroup>
          <FormGroup className="mr-sm-2">
            <Label for="Price" className="mr-sm-2">
              Price
            </Label>
            <Input
              id="Price"
              onChange={this.handleChangePrice}
              placeholder="Type in product price"
            />
          </FormGroup>
          <Button onClick={this.handleSubmit}>Submit</Button>
        </Form>
        <br />
      </div>
    );
  }
}

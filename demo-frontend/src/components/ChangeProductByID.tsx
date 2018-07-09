import * as React from 'react';
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

export interface IState {
  isLoaded: boolean,
  id: number,
  name: string,
  category: string,
  price: number
}

export default class ChangeProductByID extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      category: "",
      id: -1,
      isLoaded: false,
      name: "",
      price: -1
    };
    this.handleChangeID = this.handleChangeID.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleChangeID(event: any) {
    this.setState({
      id: event.target.value
    });
  }

  public handleChangeName(event: any) {
    this.setState({
      name: event.target.value
    });
  }

  public handleChangeCategory(event: any) {
    this.setState({
      category: event.target.value
    });
  }

  public handleChangePrice(event: any) {
    this.setState({
      price: event.target.value
    });
  }

  public handleSubmit(event: any) {
    event.preventDefault();
    fetch("https://localhost:44326/api/Products/" + this.state.id, {
      body: JSON.stringify({
        category: this.state.category,
        id: this.state.id,
        name: this.state.name,
        price: this.state.price
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "PUT"
    });
  }

  public render() {
    return (
      <div className="FormContainer">
        <h2>Update Product in Database</h2>
        <Form inline={true}>
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

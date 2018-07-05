import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

export default class DeleteProductByID extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      id: -1
    };
    this.handleChangeID = this.handleChangeID.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeID(event) {
    this.setState({
      id: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("https://localhost:44326/api/Products/" + this.state.id, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: this.state.id
      })
    });
  }

  render() {
    return (
      <div className="FormContainer">
        <h2>Delete Product in Database</h2>
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
          <Button onClick={this.handleSubmit}>Submit</Button>
        </Form>
        <br />
      </div>
    );
  }
}

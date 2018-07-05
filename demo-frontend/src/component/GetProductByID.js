import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

export default class GetProductByID extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      product: [],
      choice: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      choice: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      product: []
    });

    fetch("https://localhost:44326/api/Products/" + this.state.choice)
      .then(response => response.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            product: this.state.product.concat(result)
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    return (
      <div className="FormContainer">
        <h2>Getting Product from Database by ID</h2>
        <Form inline>
          <FormGroup className="col-sm-2">
            <Label for="FormID" className="mr-sm-2">
              ID:
            </Label>
            <Input
              id="FormID"
              placeholder="Type Product ID"
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button type="Submit" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
        <br />
        <BootstrapTable data={this.state.product}>
          <TableHeaderColumn dataField="id" isKey>
            Product ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField="category">
            Product Category
          </TableHeaderColumn>
          <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

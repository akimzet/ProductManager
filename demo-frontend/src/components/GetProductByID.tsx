import * as React from 'react';
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

export interface IState {
  isLoaded: boolean,
  product: object[],
  choice: number
}

export default class GetProductByID extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      choice: 0,
      isLoaded: false,
      product: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleChange(event: any) {
    this.setState({
      choice: event.target.value
    });
  }

  public handleSubmit(event: any) {
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
        }
      );
  }

  public render() {
    return (
      <div className="FormContainer">
        <h2>Getting Product from Database by ID</h2>
        <Form inline={true}>
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
          <TableHeaderColumn dataField="id" isKey={true}>
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

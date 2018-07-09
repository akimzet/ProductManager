import * as React from 'react';
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

export interface IState {
  isLoaded: boolean,
  products: object[]
}

export default class GetAllProduct extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoaded: false,
      products: []
    };
  }

  public componentDidMount() {
    fetch("https://localhost:44326/api/Products")
      .then(response => response.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            products: result
          });
        }
      );
  }

  public render() {
    return (
      <div>
        <h2>Getting Products from Database</h2>
        <BootstrapTable data={this.state.products}>
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

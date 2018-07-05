import React from "react";
import { Jumbotron, Button } from "reactstrap";
import "./App.css";
import GetAllProduct from "./GetAllProduct";
import AddProduct from "./AddProduct";
import GetProductByID from "./GetProductByID";
import ChangeProductByID from "./ChangeProductByID";
import DeleteProductByID from "./DeleteProductByID";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      GetAllProductState: false,
      AddProductState: false,
      GetProductByIDState: false,
      ChangeProductByIDState: false,
      DeleteProductByIDState: false
    };
    this.GetAllProductOnClick = this.GetAllProductOnClick.bind(this);
    this.AddProductOnClick = this.AddProductOnClick.bind(this);
    this.GetProductByIDOnClick = this.GetProductByIDOnClick.bind(this);
    this.ChangeProductByIDOnClick = this.ChangeProductByIDOnClick.bind(this);
    this.DeleteProductByIDOnClick = this.DeleteProductByIDOnClick.bind(this);
  }

  GetAllProductOnClick() {
    this.setState(prevState => ({
      GetAllProductState: !prevState.GetAllProductState
    }));
  }

  AddProductOnClick() {
    this.setState(prevState => ({
      AddProductState: !prevState.AddProductState
    }));
  }

  GetProductByIDOnClick() {
    this.setState(prevState => ({
      GetProductByIDState: !prevState.GetProductByIDState
    }));
  }

  ChangeProductByIDOnClick() {
    this.setState(prevState => ({
      ChangeProductByIDState: !prevState.ChangeProductByIDState
    }));
  }

  DeleteProductByIDOnClick() {
    this.setState(prevState => ({
      DeleteProductByIDState: !prevState.DeleteProductByIDState
    }));
  }

  render() {
    return (
      <div className="Container">
        <Jumbotron>
          <h1>Product Manager</h1>
          <Button color="primary" onClick={this.GetAllProductOnClick}>
            Get All Products
          </Button>{" "}
          <Button color="success" onClick={this.AddProductOnClick}>
            Add Product
          </Button>{" "}
          <Button color="info" onClick={this.GetProductByIDOnClick}>
            Get Product By ID{" "}
          </Button>{" "}
          <Button color="warning" onClick={this.ChangeProductByIDOnClick}>
            Change Product By ID
          </Button>{" "}
          <Button color="danger" onClick={this.DeleteProductByIDOnClick}>
            Delete Product
          </Button>
        </Jumbotron>
        {this.state.GetAllProductState ? <GetAllProduct /> : null}
        <br />
        {this.state.AddProductState ? <AddProduct /> : null}
        <br />
        {this.state.GetProductByIDState ? <GetProductByID /> : null}
        {this.state.ChangeProductByIDState ? <ChangeProductByID /> : null}
        {this.state.DeleteProductByIDState ? <DeleteProductByID /> : null}
      </div>
    );
  }
}

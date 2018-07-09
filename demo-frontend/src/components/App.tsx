import * as React from 'react';
import { Button, Jumbotron } from "reactstrap";
import AddProduct from "./AddProduct";
import "./App.css";
import ChangeProductByID from "./ChangeProductByID";
import DeleteProductByID from "./DeleteProductByID";
import GetAllProduct from "./GetAllProduct";
import GetProductByID from "./GetProductByID";

export interface IState {
  GetAllProductState: boolean,
  AddProductState: boolean,
  GetProductByIDState: boolean,
  ChangeProductByIDState: boolean,
  DeleteProductByIDState: boolean
}

export default class App extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      AddProductState: false,
      ChangeProductByIDState: false,
      DeleteProductByIDState: false,
      GetAllProductState: false,
      GetProductByIDState: false
  }
    this.GetAllProductOnClick = this.GetAllProductOnClick.bind(this);
    this.AddProductOnClick = this.AddProductOnClick.bind(this);
    this.GetProductByIDOnClick = this.GetProductByIDOnClick.bind(this);
    this.ChangeProductByIDOnClick = this.ChangeProductByIDOnClick.bind(this);
    this.DeleteProductByIDOnClick = this.DeleteProductByIDOnClick.bind(this);
  }

  public GetAllProductOnClick() {
    this.setState(prevState => ({
      AddProductState: false,
      ChangeProductByIDState: false,
      DeleteProductByIDState: false,
      GetAllProductState: !prevState.GetAllProductState,
      GetProductByIDState: false
    }));
  }

  public AddProductOnClick() {
    this.setState(prevState => ({
      AddProductState: !prevState.AddProductState,
      ChangeProductByIDState: false,
      DeleteProductByIDState: false,
      GetAllProductState: false,
      GetProductByIDState: false
      
    }));
  }

  public GetProductByIDOnClick() {
    this.setState(prevState => ({
      AddProductState: false,
      ChangeProductByIDState: false,
      DeleteProductByIDState: false,
      GetAllProductState: false,
      GetProductByIDState: !prevState.GetProductByIDState
      
    }));
  }

  public ChangeProductByIDOnClick() {
    this.setState(prevState => ({
      AddProductState: false,
      ChangeProductByIDState: !prevState.ChangeProductByIDState,
      DeleteProductByIDState: false,
      GetAllProductState: false,
      GetProductByIDState: false
      
    }));
  }

  public DeleteProductByIDOnClick() {
    this.setState(prevState => ({
      AddProductState: false,
      ChangeProductByIDState: false,
      DeleteProductByIDState: !prevState.DeleteProductByIDState,
      GetAllProductState: false,
      GetProductByIDState: false
    }));
  }
  
  public render() {
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
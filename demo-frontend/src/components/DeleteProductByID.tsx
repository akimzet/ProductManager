import * as React from 'react';
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

export interface IState {
  isLoaded: boolean,
  id: number
}

export default class DeleteProductByID extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      id: -1,
      isLoaded: false
    };
    this.handleChangeID = this.handleChangeID.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleChangeID(event: any) {
    this.setState({
      id: event.target.value
    });
  }

  public handleSubmit(event: any) {
    event.preventDefault();
    fetch("https://localhost:44326/api/Products/" + this.state.id, {
      body: JSON.stringify({
        id: this.state.id
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "DELETE"
    });
  }

  public render() {
    return (
      <div className="FormContainer">
        <h2>Delete Product in Database</h2>
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
          <Button onClick={this.handleSubmit}>Submit</Button>
        </Form>
        <br />
      </div>
    );
  }
}

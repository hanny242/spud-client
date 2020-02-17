import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./GameCollection.css";

export class GameCollection extends Component {
  constructor() {
    super();
    this.state = {
      redirectTo: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    this.setState({
      redirectTo: "/addgame"
    });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div>
          <button
            id="addGame"
            className="btn btn-primary col-1 col-mr-auto"
            onClick={this.handleSubmit}
            type="submit"
          >
            Add Game
          </button>
        </div>
      );
    }
  }
}

export default GameCollection;

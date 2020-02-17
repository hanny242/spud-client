import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./GameCard.scss";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { API } from "../Api";

export class GameCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectTo: null
    };

    this.handleAddGame = this.handleAddGame.bind(this);
  }

  handleAddGame() {
    debugger;
    API.post("/addgame", {
      gameId: this.props.id
    })
      .then(response => {
        if (response.status === 200) {
          this.setState({
            redirectTo: "/gamecollection"
          });
        }
      })
      .catch(error => {
        console.log("game update error");
        console.log(error);
      });
  }
  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src={this.props.background_image} />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary" onClick={this.handleAddGame}>
              Add Game
            </Button>
          </Card.Body>
        </Card>
      );
    }
  }
}

export default GameCard;

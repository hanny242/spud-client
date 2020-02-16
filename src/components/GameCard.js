import React, { Component } from "react";
import "./GameCard.scss";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { API } from "../Api";

export class GameCard extends Component {
  constructor(props) {
    super(props);

    this.handleAddGame = this.handleAddGame.bind(this);
  }

  handleAddGame() {
    API.put("/addgame", {
       gameId: this.props.id
    });
  }
  render() {
    return (
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={this.props.background_image} />
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" onClick={this.props.handleAddGame}>
            Add Game
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default GameCard;

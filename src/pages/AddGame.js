import React, { Component } from "react";
import { rawgAPI, API } from "../Api";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "./AddGame.css";

import CardDeck from 'react-bootstrap/CardDeck'
import GameCard from '../components/GameCard'

export class AddGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchinput: "",
      gameslist: [{}],
      redirectTo: null,
      gameID: "",
      searchResults: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.handleSearch();
  }

  handleChange(event) {
    this.setState({ searchinput: event.target.value });
  }

  handleSearch() {
    let currentComponent = this;
    rawgAPI
      .get("", {
        params: {
          page_size: 8,
          search: this.state.searchinput
        }
      })
      .then(function(response) {
        currentComponent.setState({ gameslist: response.data.results });
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="addGame">
        <div className="form">
          <Form>
            <Form.Group controlId="addGameForm">
              <Form.Label>Game Name</Form.Label>
              <Form.Control
                as="input"
                type="text"
                value={this.state.searchinput}
                placeholder="Search Game"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="button" onClick={this.handleSearch}>
              Submit
            </Button>
          </Form>
        </div>
        <CardDeck>
          {this.state.gameslist.map((game, index) => {
            return <GameCard key={index} {...game} />;
          })}
        </CardDeck>
      </div>
    );
  }
}

export default AddGame;

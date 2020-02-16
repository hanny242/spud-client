import React from "react";
import API from "../Api";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Jumbotron } from "react-bootstrap";
import "./Home.css";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        {/* <div>
                    <Nav />
                </div> */}
        <Jumbotron>
          <h1>
            Manage your game collection across platforms. See what your friends
            are playing.
          </h1>
          <p>
            <button className="myButton"variant="primary">Learn more</button>
          </p>
        </Jumbotron>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

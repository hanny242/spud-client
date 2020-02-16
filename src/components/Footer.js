import React, { Component } from "react";
import API from "../Api";
import Nav from "react-bootstrap/Nav";

export class Footer extends Component {
  render() {
    return (
      <div>
        <Nav className="justify-content-center" activeKey="/home" sticky='bottom'>
          <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default Footer;

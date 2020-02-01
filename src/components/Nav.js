import React from 'react';
import { Link } from 'react-router-dom';
import Potato from '../images/cutepotato.png'

export default class Nav extends React.Component {
  render() {    
    return (
      <nav className="Nav">
        <div className="Nav__container">
          <Link to="/" className="Nav__brand">
            <h1>SPUD</h1>
          </Link>

          <div className="Nav__right">
            <ul className="Nav__item-wrapper">
              <li className="Nav__item">
                <Link className="Nav__link" to="/">Home</Link>
              </li>
              <li className="Nav__item">
                <Link className="Nav__link" to="/signup">Signup</Link>
              </li>
              <li className="Nav__item">
                <Link className="Nav__link" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="text-decoration-none nav-links" to="/">Amplified</Link>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link className="text-decoration-none nav-links" to="/about">About</Link>
            </li>
            <li>
              <Link className="text-decoration-none nav-links" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar;
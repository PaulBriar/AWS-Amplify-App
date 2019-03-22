import React, { Component } from 'react';
import logo from './amplifylogo.jpg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <NavBar />
        <body className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Was this even easier than Netlify!? I'll be hunted if I say that out loud...
          </p>
          <a
            className="App-link text-decoration-none"
            href="https://aws-amplify.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            We're Amplified!!
          </a>
        </body>
        <Footer />
      </Router>

      </div>
    );
  }
}

export default App;

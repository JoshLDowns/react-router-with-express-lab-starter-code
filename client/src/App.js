import React, { Component } from 'react';
import { Router } from "@reach/router";

import NavBar from "./components/NavBar";
import Blog from "./components/Blog";
import About from "./components/About.js";
import Home from "./components/Home";

import './App.css';

class App extends Component {

  render() {

    return (
      <div className="App">
        <NavBar />
        <Router>
          <Home path="/" />
          <About path="/about" />
          <Blog path="/blog" />
        </Router>
    </div>
  );
}
}

export default App;

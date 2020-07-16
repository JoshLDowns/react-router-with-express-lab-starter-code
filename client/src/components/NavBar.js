import React, { Component } from 'react'
import { Link } from "@reach/router";

class NavBar extends Component {
  render() {
    return (
      <div>
        <Link className="nav-link" to="/" >Home</Link>
        <Link className="nav-link" to="/about" >About</Link>
        <Link className="nav-link" to="/blog" >Blog</Link>
      </div>
    )
  }
}

export default NavBar

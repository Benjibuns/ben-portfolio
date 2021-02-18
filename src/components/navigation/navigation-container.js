import React, { Component } from "react"
import {NavLink} from "react-router-dom"

export default class NavigationComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="nav-wrapper">
        <div className="lieft-side">
          <NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink>

          <NavLink to="/about-me" activeClassName="nav-link-active">About</NavLink>
          <NavLink to="/contact" activeClassName="nav-link-active">Contact</NavLink>
          <NavLink to="/blog" activeClassName="nav-link-active">Blogs</NavLink>

          {false ? <NavLink to="/add-blog">Add Blogs</NavLink>: ""}
        </div>

        <div className="right-side">BENJAMIN RIVERA</div>
      </div>
    )
  }
}
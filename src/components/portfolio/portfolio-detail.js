import axios from "axios";
import React, { Component } from "react";

export default class PortfolioDetail extends Component {
  constructor(props) {
    super(props);
  }

  UNSAFE_componentWillMount() {
    this.getPortfolioItem();
  }

  getPortfolioItem() {
    axios
      .get(
        `https://benjibuns.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`,
        { withCredentials: true }
      )
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
        console.log("getPortfolioItem error", error);
      });
  }

  render() {
    return (
      <div>
        <h2>Portfolio Detail for {this.props.match.params.slug}</h2>
      </div>
    );
  }
}

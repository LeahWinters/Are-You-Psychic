import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      round: 0,
    };
  }

  render() {
    return (
      <div className="Header">
        <h2 className="game-title">Are you Psychic {this.props.playerName}</h2>
        <h3 className="card-count">Card {this.props.round + 1}/10</h3>
      </div>
    );
  }
}

export default Header;

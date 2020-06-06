import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      round: 0,
    };
  }

  // resetRound = () => {
  //   this.setState({round: this.props.round})
  // }

  render() {
    // this.resetRound();
    console.log(this.props.round)
    return (
      <div className='Header'>
        <h2 className="game-title">Are you Psychic {this.props.playerName}</h2>
        <h3 className="card-count">Card {this.props.round}/10</h3>
      </div>);
  }
}

export default Header;
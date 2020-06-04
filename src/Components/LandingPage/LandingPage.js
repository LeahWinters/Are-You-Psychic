import React, { Component } from "react";
import "./LandingPage.css";
import { Link, Router } from "react-router-dom";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStarted: false,
      name: "",
      difficulty: "easy",
      inputFields: true,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.length < 1) {
      window.alert("Please fill out your name!");
      return this.setState({ fieldsInput: false });
    }
    this.props.startGame(this.state.name, this.state.difficulty);
    this.setState({ gameStarted: true });
    // Router.push('/game-page')
  };

  render() {
    return (
      <div className="landing-page">
        <h1>Are You Psychic</h1>
        <form className="set-game-up-form">
          <div className="name-input-holder">
            <p className="name-label">Name: </p>
            <input
              placeholder="Name"
              className="name-input"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            ></input>
          </div>
          <select
            alt="Select your level of difficulty"
            name="difficulty"
            value={this.state.difficulty}
            onChange={this.handleChange}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <Link to={`/game-page`}>
            <button
              className="play-btn"
              type="button"
              onClick={this.handleSubmit}
            >
              Play!
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default LandingPage;

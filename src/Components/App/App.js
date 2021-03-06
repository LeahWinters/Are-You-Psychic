import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage.js";
import Easy from "../Easy/Easy.js";
import Medium from "../Medium/Medium.js";
import Hard from "../Hard/Hard.js";
import Header from "../Header/Header.js";
import { getTenCards } from "../../apiCall";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      difficulty: "",
      gameStarted: false,
      allCards: [],
      round: 0,
      correctAnswers: 0,
    };
  }

  startGame = (name, difficulty) => {
    this.setState({ name, difficulty, gameStarted: true });
  };

  componentDidMount = async () => {
    const cards = await getTenCards();
    this.setState({ ...this.state, allCards: cards });
  };

  advanceRound = () => {
    this.setState({ round: this.state.round + 1 });
  };

  handleCounter = () => {
    const match = this.state.correctAnswers + 1;
    this.setState({ correctAnswers: match });
  };

  render() {
    let version = null;
    if (this.state.difficulty === "easy") {
      version = (
        <Easy
          allCards={this.state.allCards}
          advanceRound={this.advanceRound}
          currentRound={this.state.round}
          correctCard={this.state.correctCard}
          handleCounter={this.handleCounter}
        />
      );
    } else if (this.state.difficulty === "medium") {
      version = <Medium allCards={this.state.allCards} />;
    } else if (this.state.difficulty === "hard") {
      version = <Hard allCards={this.state.allCards} />;
    }
    return (
      <div className="App">
        {!this.state.gameStarted ? (
          <Redirect to="/" />
        ) : (
          <Redirect to="/game-page" />
        )}
        <Switch>
          <Route
            exact
            path="/game-page"
            component={() => (
              <div className="game-page">
                <Header playerName={this.state.name} round={this.state.round} />
                {version}
              </div>
            )}
          />
          <Route
            path="/"
            component={() => (
              <div className="landing-page">
                <LandingPage startGame={this.startGame} />
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;

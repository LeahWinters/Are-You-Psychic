import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage.js";
import GamePage from "../GamePage/GamePage.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      difficulty: "",
      gameStarted: false,
    };
  }

  startGame = (name, difficulty) => {
    this.setState({name, difficulty, gameStarted: true})
    console.log(this.state.name, this.state.difficulty, this.state.gameStarted)
  };

  render() {
    console.log(this.state.name, this.state.difficulty, this.state.gameStarted)
    return (
      <div className="App">
        {!this.state.gameStarted ? <Redirect to='/'/> : <Redirect to='/game-page'/>}
        <Switch>
          <Route
            exact path="/game-page"
            component={() => (
              <div className="game-page">
                <GamePage />
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

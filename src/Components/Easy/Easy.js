import React, { Component } from "react";
import "./Easy.css";

class Easy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: {},
      correctAnswers: 0,
      guess: "red",
    };
  }

  componentDidMount = () => {
    this.setUpCard();
  };

  handleSubmit = () => {
    this.props.advanceRound();
    this.checkCurrentCardColor();
  };

  handleChange = (e) => {
    this.setState({ guess: e.target.value });
  };

  setUpCard = () => {
    let currentCard = this.props.allCards.cards[this.props.currentRound];
    this.setState({ currentCard: currentCard });
  };

  checkCurrentCardColor = () => {
    let currentCardColor;
    if (
      this.state.currentCard.suit === "SPADES" ||
      this.state.currentCard.suit === "CLUBS"
    ) {
      currentCardColor = "black";
      this.checkAnswer(currentCardColor);
    } else if (
      this.state.currentCard.suit === "DIAMONDS" ||
      this.state.currentCard.suit === "HEARTS"
    ) {
      currentCardColor = "red";
      this.checkAnswer(currentCardColor);
    }
    console.log(currentCardColor);
  };

  checkAnswer = (currentCardColor) => {
    if (currentCardColor === this.state.guess) {
      this.props.handleCounter();
      console.log(true);
    } else {
      console.log(false);
    }
  };

  render() {
    return (
      <div className="easy-game-page">
        <div className="cards-holder">
          <section className="card-to-predict-holder">
            <img
              className="card-to-predict"
              src={this.state.currentCard.image}
              alt="card-pic"
            />
          </section>
        </div>
        <form className="user-prediction-form">
          <select
            alt="Select your predicted color"
            name="color"
            className="select-color"
            value={this.state.guess}
            onChange={this.handleChange}
          >
            <option value="red">Red</option>
            <option value="black">Black</option>
          </select>
          <button
            className="predict-btn"
            type="button"
            onClick={this.handleSubmit}
          >
            Predict
          </button>
        </form>
      </div>
    );
  }
}

export default Easy;

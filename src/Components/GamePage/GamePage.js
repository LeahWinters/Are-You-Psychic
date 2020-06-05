import React, { Component } from "react";
import "./GamePage.css";

class GamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: null,
    };
  }

  render() {
    return (
      <div className='game-page'>
        <div className="cards-holder">
          <section className='users-prediction-card-holder'>
            <div className='users-prediction-card'>

            </div>
          </section>
          <section className='card-to-predict-holder'>
            <div className='card-to-predict'>

            </div>
          </section>
        </div>
        <form className="user-prediction-form">
          <select
            alt="Select your predicted color"
            name="color"
            className="select-color"
            // value={this.state.difficulty}
            // onChange={this.handleChange}
          >
            <option value="Red">Red</option>
            <option value="Black">Black</option>
          </select>
          <button className="predict-btn" type="button">
            Predict
          </button>
        </form>
      </div>);
  }
}

export default GamePage;

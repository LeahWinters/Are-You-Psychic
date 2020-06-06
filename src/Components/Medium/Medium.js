import React, { Component } from "react";
import "./Medium.css";

class Medium extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: null,
    };
  }

  render() {
    return (
      <div className='medium-game-page'>
        <div className="cards-holder">
          <section className='card-to-predict-holder'>
            <div className='card-to-predict'>

            </div>
          </section>
        </div>
        <form className="user-prediction-form">
          <select
            alt="Select Your Predicted Suit"
            name="suit"
            className="select-suit"
            // value={this.state.difficulty}
            // onChange={this.handleChange}
          >
            <option value="Spade">Spade</option>
            <option value="Club">Club</option>
            <option value="Dimamond">Dimamond</option>
            <option value="Heart">Heart</option>
          </select>
          <button className="predict-btn" type="button">
            Predict
          </button>
        </form>
      </div>);
  }
}

export default Medium;
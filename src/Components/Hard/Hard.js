import React, { Component } from "react";
import "./Hard.css";

class Hard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: null,
    };
  }

  render() {
    return (
      <div className='hard-game-page'>
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
          <select
            alt="Select Your Predicted Card Number"
            name="number"
            className="select-number"
            // value={this.state.difficulty}
            // onChange={this.handleChange}
          >
            <option value="Two">2</option>
            <option value="Three">3</option>
            <option value="Four">4</option>
            <option value="Five">5</option>
            <option value="Six">6</option>
            <option value="Seven">7</option>
            <option value="Eight">8</option>
            <option value="Nine">9</option>
            <option value="Ten">10</option>
            <option value="Jack">Jack</option>
            <option value="Queen">Queen</option>
            <option value="King">King</option>
            <option value="Ace">Ace</option>
          </select>
          <button className="predict-btn" type="button">
            Predict
          </button>
        </form>
      </div>);
  }
}

export default Hard;
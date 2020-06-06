import React, { Component } from "react";
import "./Easy.css";

class Easy extends Component {
  constructor(props) {
    super(props);
    this.state = {
        currentCard: {}
    };
  }

  componentDidMount = () => {
    this.setUpCard();
  };

handleSubmit = () => {
    this.props.advanceRound();
 }


 setUpCard = async () => {
    let currentCard = await this.props.allCards.cards[this.props.currentRound];
    this.setState({currentCard: currentCard}) 
 }

 
  render() {
    console.log(this.state.currentCard.code)
    return (
      <div className='easy-game-page'>
        <div className="cards-holder">
          <section className='card-to-predict-holder'>
            <img className='card-to-predict' src={this.state.currentCard.image}/>    
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
          <button className="predict-btn" type="button" onClick={this.handleSubmit}>
            Predict
          </button>
        </form>
      </div>);
  }
}

export default Easy;
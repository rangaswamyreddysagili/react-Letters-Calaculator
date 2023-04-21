// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onEnteredValue = () => {
    const {count} = this.state
    this.setState({count: count + 1})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="main-heading">Calculate the Letters you enter</h1>
          <label className="label-styles" htmlFor="textEntered">
            Enter the phrase
          </label>
          <br />
          <input
            className="input-styles"
            type="text"
            id="textEntered"
            placeholder="Enter the phrase"
            onChange={this.onEnteredValue}
          />
          <div className="no-of-letters-container">
            <p className="no-of-letters-para">No.of letters: {count}</p>
          </div>
        </div>
        <div className="img-container">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator

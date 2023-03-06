import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  increaseSpeed = val => {
    let result
    if (val >= 200) {
      result = val
    } else {
      result = val + 10
    }
    return result
  }

  decreaseSpeed = val => {
    let result
    if (val <= 0) {
      result = 0
    } else {
      result = val - 10
    }
    return result
  }

  onAccelerate = () => {
    this.setState(prevState => ({
      speed: this.increaseSpeed(prevState.speed),
    }))
  }

  onBreak = () => {
    this.setState(prevState => ({
      speed: this.decreaseSpeed(prevState.speed),
    }))
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="speedometer-img"
          alt="speedometer"
        />
        <h1 className="speed-text">Speed is {speed}mph</h1>
        <p className="speed-info">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btns-container">
          <button
            className="accelerate-button"
            type="button"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>
          <br />
          <button
            className="apply-brake-button"
            type="button"
            onClick={this.onBreak}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer

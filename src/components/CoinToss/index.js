import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    head: 0,
    tail: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  changeCountValue = () => {
    const randomValue = Math.ceil(Math.random() * 2)
    console.log(randomValue)
    if (randomValue === 1) {
      this.setState(prevState => ({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
        head: prevState.head + 1,
      }))
    } else {
      this.setState(prevState => ({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
        tail: prevState.tail + 1,
      }))
    }
  }

  render() {
    const {head, tail, imageUrl} = this.state
    const total = head + tail
    return (
      <div className="app-container">
        <div className="toss-container">
          <h1 className="toss-heading">Coin Toss Game</h1>
          <p className="toss-paragraph">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="coin-image" />
          <button
            type="button"
            className="button"
            onClick={this.changeCountValue}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {total}</p>
            <p className="count">Heads: {head}</p>
            <p className="count">Tails: {tail}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss

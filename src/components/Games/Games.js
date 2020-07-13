import React from 'react';
import './Games.css';

class Games extends React.Component {

  render() {
    return (
      <div className="game">
        <div className="game-title">
          <h4>{this.props.game.name}</h4>
        </div>
        <div className="game-img">
          <img src={this.props.game.img} alt=""/>
        </div>
      </div>
    );
  }
}


export default Games;

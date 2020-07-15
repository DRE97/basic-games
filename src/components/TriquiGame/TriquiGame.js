import React from 'react';
import './TriquiGame.css';
import Navbar from '../Navbar/Navbar';
import cube from '../../imagenes/cubo-triqui.png';
import x from '../../imagenes/x.png';
import o from '../../imagenes/o.png';

const initialState = {
  src: cube,
  plays: [],
  pcPlays: [],
  pcOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  result: '',
  visible: false
}

class TriquiGame extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialState;

    this.showResult = this.showResult.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
    this.displayO = this.displayO.bind(this);
    this.displayX = this.displayX.bind(this);
    this.restart = this.restart.bind(this);
  }

  showResult(winner) {
    this.winner = winner;
    const plays = this.state.plays;
    const pcPlays = this.state.pcPlays;

    if(winner >= 0) {
      if(winner===0) {
        setTimeout(() => {this.setState({result: 'GANASTE!!', visible: true});}, 500);
      } else if(winner===1) {
        setTimeout(() => {this.setState({result: 'PERDISTE!!', visible: true});}, 500);
      }

    } else if(winner < 0 && ((plays.length + pcPlays.length) >= 9)) {
      setTimeout(() => {this.setState({result: 'EMPATE!!', visible: true});}, 500);
    }
  }

  checkWinner() {
    let arraysToCheck = [this.state.plays, this.state.pcPlays];
    let helper = [];
    let helper2 = [];
    let foundWinner = false;
    let winner = -1;
    const winnningOptions = [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 5, 9],
      [3, 5, 7]
    ];

    if(arraysToCheck[0].length >= 3){
      for(let j=0; j<2 && !foundWinner; j++) {
        helper2 = arraysToCheck[j];
        for(let i=0; i<8 && !foundWinner; i++) {
          helper = winnningOptions[i];
          arraysToCheck[j] = arraysToCheck[j].filter(option => helper.includes(option));
          if(arraysToCheck[j].length === 3){
            winner = j;
            foundWinner = true;
          }
          arraysToCheck[j] = helper2;
        }
      }

      this.showResult(winner);

    }
    return foundWinner;
  }

  displayO(event) {
    if(!this.checkWinner()) {
      const plays = this.state.plays;
      if(!event.target.disabled) {
        event.target.src = o;
        event.target.disabled = true;
        plays.push(parseInt(event.target.id));
        this.displayX();
      }
    }
    this.checkWinner();
  }

  displayX() {
    if(!this.checkWinner()) {
      const plays = this.state.plays;
      const pcPlays = this.state.pcPlays;
      let pcOptions = this.state.pcOptions;
      pcOptions = pcOptions.filter(option => (!plays.includes(option) && !pcPlays.includes(option)));
      if(pcOptions.length > 0) {
        const index = Math.floor(Math.random() * pcOptions.length);
        document.getElementById(pcOptions[index]).src = x;
        pcPlays.push(pcOptions[index]);
        pcOptions = pcOptions.filter(option => !pcPlays.includes(option));
      }
    }
  }

  restart() {
    document.location.reload();
  }

  render() {
    return (
      <div className="game-container">
        <Navbar />
        <div className="game-box">
          <div className="game-title">
            <h2>TRIQUI</h2>
          </div>
          <div className="triqui-game">
            <div className="row">
              <img id="1" className="cube" src={this.state.src} onClick={this.displayO} alt=""/>
              <img id="2" className="cube" src={this.state.src} onClick={this.displayO} alt=""/>
              <img id="3" className="cube" src={this.state.src} onClick={this.displayO} alt=""/>
            </div>
            <div className="row">
              <img id="4" className="cube" src={this.state.src} onClick={this.displayO} alt=""/>
              <img id="5" className="cube" src={this.state.src} onClick={this.displayO} alt=""/>
              <img id="6" className="cube" src={this.state.src} onClick={this.displayO} alt=""/>
            </div>
            <div className="row">
              <img id="7" className="cube" src={this.state.src} onClick={this.displayO} alt=""/>
              <img id="8" className="cube" src={this.state.src} onClick={this.displayO} alt=""/>
              <img id="9" className="cube" src={this.state.src} onClick={this.displayO} alt=""/>
            </div>
          </div>
          <div className="instructions">
            <h4>Instrucciones del juego:</h4>
            <p>
              Por turnos, el jugador debe poner una O en una de las casillas.<br/>
              Cuando un jugador logre hacer 3 en linea, GANA.<br/>
              Hay empate si se llena el tablero y no hay ganador.<br/>
            </p>
          </div>
        </div>
        <div className={this.state.visible?'finished-triqui':'unfinished'}>
          <div className="result-title-triqui">
            <h2 className="result-header">{this.state.result}</h2>
          </div>
          <div className="result-button-triqui">
            <input type="button" value="JUGAR DE NUEVO" onClick={this.restart}/>
          </div>
        </div>
      </div>
    );
  }
}

export default TriquiGame;

import React from 'react';
import './DoorsGame.css';
import Navbar from '../Navbar/Navbar';
import door from '../../imagenes/doors-game-images/closed_door.svg';
import beach from '../../imagenes/doors-game-images/beach.svg';
import robot from '../../imagenes/doors-game-images/robot.svg';
import space from '../../imagenes/doors-game-images/space.svg';

const images = [beach, robot, space];

function randomPositions() {
  let posiciones = [0,1,2];

  posiciones = posiciones.sort(function() {return Math.random() - 0.5});
  return posiciones;
}

const initialState = {
  posRow: randomPositions(),
  count: 0,
  result: '',
  visible: false
}

class DoorsGame extends React.Component {

  constructor(props) {
    super(props);

    this.state = initialState;

    this.setImage = this.setImage.bind(this);
    this.checkPosition = this.checkPosition.bind(this);
    this.setResult = this.setResult.bind(this);
    this.restart = this.restart.bind(this);
  }

  setImage(event) {
    const id = event.currentTarget.id;
    let count = this.state.count;

    event.currentTarget.src = images[id];
    document.getElementById(id).disabled = true;

    if(images[id] === robot) {
      count++;
      this.checkPosition(count);
    } else {
      count++;
    }

    this.setState({ count: count });
  }

  checkPosition(count) {
    this.count = count;
    if(count === 3) {
      this.setResult('GANASTE !!');

    } else {
      this.setResult('PERDISTE !!');
    }
  }

  setResult(result) {
    setTimeout(() => {
      this.setState({result: result, visible: true});
    }, 500);
  }

  restart() {
    document.location.reload();
  }

  render() {
    return (
      <div id="doors-container" className="game-container">
        <Navbar />
        <div id="doors-box" className="game-box">
          <div className="game-title">
            <h2>DOORS GAME</h2>
          </div>
          <div className="doors-images">
            <img id={this.state.posRow[0]} className="closed-door" src={door} alt="" onClick={this.setImage}/>
            <img id={this.state.posRow[1]} className="closed-door" src={door} alt="" onClick={this.setImage}/>
            <img id={this.state.posRow[2]} className="closed-door" src={door} alt="" onClick={this.setImage}/>
          </div>
          <div id="doors-instructions" className="instructions">
            <h4>Instrucciones del juego:</h4>
            <p>
              Escondido detrás de una de estas puertas está el robot.<br/>
              Tu misión es abrir todas las puertas sin toparte con el,<br/>
              si logras evitar el robot hasta que abras la última puerta, ¡ganas!<br/>
            </p>
          </div>
        </div>
        <div className={this.state.visible?'finished-doors':'unfinished'}>
          <div className="result-title">
            <h2>{this.state.result}</h2>
          </div>
          <div className="result-button-doors">
            <input type="button" value="JUGAR DE NUEVO" onClick={this.restart}/>
          </div>
        </div>
      </div>
    );
  }
}


export default DoorsGame;

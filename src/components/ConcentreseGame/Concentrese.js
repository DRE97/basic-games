import React from 'react';
import './Concentrese.css';
import Navbar from '../Navbar/Navbar';
import rect from '../../imagenes/rectangulo.png';
import rocket from '../../imagenes/concentrese/rocket.png';
import plane from '../../imagenes/concentrese/plane.png';
import mountain from '../../imagenes/concentrese/mountain.png';
import beach from '../../imagenes/concentrese/beach.png';

const images = [rocket, plane, mountain, beach];

function randomPositions() {
  let posiciones = [1,2,3,4,5,6,7,8];

  posiciones = posiciones.sort(function() {return Math.random() - 0.5});

  return posiciones;

}

const initialState = {
  posRow: randomPositions(),
  plays: [],
  clickedId: [],
  remainingPairs: 4,
  tries: 0,
  visible: false
}


class Concentrese extends React.Component {

  constructor(props) {
    super(props);

    this.state = initialState;

    this.setImage = this.setImage.bind(this);
    this.checkPair = this.checkPair.bind(this);
    this.restartImage = this.restartImage.bind(this);
    this.checkEndGame = this.checkEndGame.bind(this);
    this.showResult = this.showResult.bind(this);
    this.restart = this.restart.bind(this);
  }


  setImage(event) {
    let countPlays = this.state.plays;
    let selected = this.state.clickedId;
    let remainingPairs = this.state.remainingPairs;
    let tries = this.state.tries;
    const option = event.currentTarget.id;
    switch (option) {
      case '1':
        event.currentTarget.src = images[0];
        selected.push(option);
        break;
      case '2':
        event.currentTarget.src = images[1];
        selected.push(option);
        break;
      case '3':
        event.currentTarget.src = images[2];
        selected.push(option);
        break;
      case '4':
        event.currentTarget.src = images[3];
        selected.push(option);
        break;
      case '5':
        event.currentTarget.src = images[0];
        selected.push('1');
        break;
      case '6':
        event.currentTarget.src = images[1];
        selected.push('2');
        break;
      case '7':
        event.currentTarget.src = images[2];
        selected.push('3');
        break;
      case '8':
        event.currentTarget.src = images[3];
        selected.push('4');
        break;
      default:
        //event.preventDefault();
        break;
    }

    countPlays.push(option);

    if(countPlays.length === 2) {
      //this.checkPair();
      if(!this.checkPair(selected)) {
        this.restartImage();
        tries++;
        this.setState({ plays: [], clickedId: [], tries: tries });

      } else {
        remainingPairs--;
        tries++;
        this.setState({ plays: [], clickedId: [], remainingPairs: remainingPairs, tries: tries });
        this.checkEndGame(remainingPairs, tries);
      }
    }
  }

  checkPair(selected) {
    this.selected = selected;

    if(selected[0] === selected[1]) {
      //PAR
      return true

    } else {
      //NO PAR
      return false
    }
  }

  restartImage() {
    const plays = this.state.plays;

    setTimeout(() => {
      document.getElementById(plays[0]).src = rect;
      document.getElementById(plays[1]).src = rect;
    }, 1000);

  }

  checkEndGame(remainingPairs, tries) {
    this.remainingPairs = remainingPairs;
    this.tries = tries;

    if(remainingPairs === 0) {
      console.log('FIN DEL JUEGO');
      console.log('Intentos: ' + tries);
      this.showResult(tries);
    }
  }

  showResult(tries) {
    this.tries = tries;
    this.setState({ visible: true });
  }

  restart() {
    document.location.reload();
  }

  render() {
    return (
      <div id="cubes-container" className="game-container">
        <Navbar />
        <div id="cubes-box" className="game-box">
          <div className="game-title">
            <h2>CONCENTRESE</h2>
          </div>
          <div className="cubes-images">
            <div className="row" >
              <img id={this.state.posRow[0]} className="rectangle" src={rect} alt="" onClick={this.setImage}/>
              <img id={this.state.posRow[1]} className="rectangle" src={rect} alt="" onClick={this.setImage}/>
              <img id={this.state.posRow[2]} className="rectangle" src={rect} alt="" onClick={this.setImage}/>
              <img id={this.state.posRow[3]} className="rectangle" src={rect} alt="" onClick={this.setImage}/>
            </div>
            <div className="row" >
              <img id={this.state.posRow[4]} className="rectangle" src={rect} alt="" onClick={this.setImage}/>
              <img id={this.state.posRow[5]} className="rectangle" src={rect} alt="" onClick={this.setImage}/>
              <img id={this.state.posRow[6]} className="rectangle" src={rect} alt="" onClick={this.setImage}/>
              <img id={this.state.posRow[7]} className="rectangle" src={rect} alt="" onClick={this.setImage}/>
            </div>
          </div>
          <div id="doors-instructions" className="instructions">
            <h4>Instrucciones del juego:</h4>
            <p>
              El jugador deberá seleccionar dos cartas al azar,<br/>
              si las dos cartas tienen la misma figura el jugador tomara esas dos cartas <br/>
              las cuales le sumaran puntos y podrá automáticamente repetir el turno, <br/>
              pero si las dos cartas tienen diferentes figuras el jugador deberá <br/>
              volver a colocar las cartas boca abajo en el mismo sitio.<br/>
            </p>
          </div>
        </div>
        <div className={this.state.visible?'finished-con':'unfinished'}>
          <div className="result-title-con">
            <h2 className="result-header">Felicidades!!</h2>
            <h5 className="result-tries">Lo lograste en {this.state.tries} intentos.</h5>
          </div>
          <div className="result-button-con">
            <input type="button" value="JUGAR DE NUEVO" onClick={this.restart}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Concentrese;

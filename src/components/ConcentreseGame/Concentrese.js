import React from 'react';
import './Concentrese.css';
import Navbar from '../Navbar/Navbar';
import rect from '../../imagenes/rectangulo.png';

class Concentrese extends React.Component {
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
              <img className="rectangle" src={rect} alt=""/>
              <img className="rectangle" src={rect} alt=""/>
              <img className="rectangle" src={rect} alt=""/>
              <img className="rectangle" src={rect} alt=""/>
            </div>
            <div className="row" >
              <img className="rectangle" src={rect} alt=""/>
              <img className="rectangle" src={rect} alt=""/>
              <img className="rectangle" src={rect} alt=""/>
              <img className="rectangle" src={rect} alt=""/>
            </div>
          </div>
          <div id="doors-instructions" className="instructions">
            <p>Instrucciones del juego:<br/>
            cada jugador deberá poner turnadamente boca arriba dos cartas al azar,<br/>
            si las dos cartas tienen la misma figura el jugador tomara esas dos cartas <br/>
            las cuales le sumaran puntos y podrá automáticamente repetir el turno, <br/>
            pero si las dos cartas tienen diferentes figuras el jugador deberá <br/>
            volver a colocar las cartas boca abajo en el mismo sitio<br/>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Concentrese;

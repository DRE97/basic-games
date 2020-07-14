import React from 'react';
import './DoorsGame.css';
import Navbar from '../Navbar/Navbar';
import door from '../../imagenes/doors-game-images/closed_door.svg';

class DoorsGame extends React.Component {
  render() {
    return (
      <div id="doors-container" className="game-container">
        <Navbar />
        <div id="doors-box" className="game-box">
          <div className="game-title">
            <h2>DOORS GAME</h2>
          </div>
          <div className="doors-images">
            <img className="closed-door" src={door} alt=""/>
            <img className="closed-door" src={door} alt=""/>
            <img className="closed-door" src={door} alt=""/>
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
      </div>
    );
  }
}


export default DoorsGame;

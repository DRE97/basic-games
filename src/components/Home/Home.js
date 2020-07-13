// Importar archivos
import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import GamesList from '../GamesList/GamesList';

// Importar imagenes
import img1 from '../../imagenes/tic-tac-toe.png';
import img2 from '../../imagenes/concentrese.png';
import img3 from '../../imagenes/doors-game.png';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      games: [
        {
          name: 'Triqui',
          img: img1
        },
        {
          name: 'Concentrese',
          img: img2
        },
        {
          name: 'Doors game',
          img: img3
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <GamesList games={this.state.games}/>
      </div>
    );
  }
}

export default Home;

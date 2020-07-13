import React from 'react';
import Games from '../Games/Games';
import './GamesList.css';
import {Link} from "react-router-dom";

const id_juegos = ['/triqui', '/concentrese', '/doors-game'];
let i = -1;

class GamesList extends React.Component {

  render() {
    return (
      <div id="games-section" className="games-section">
        <div className="title">
          <h2>Juegos Puzzle</h2>
        </div>
        <div className="games">
          {this.props.games.map((item) => {
            i += 1;
            return <Link to={id_juegos[i]} ><div className="test" id={id_juegos[i]} ><Games game={item}/></div></Link>
          })}
        </div>
      </div>
    );
  }
}


export default GamesList;

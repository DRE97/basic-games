import React from 'react';
import './Navbar.css';
import Menu from '../Menu/Menu';
import logo from '../../icono.png';

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="icon">
          <a href="../"><img src={logo} alt="icon"/></a>
        </div>
        <div id="Navbar-title" className="Navbar-title">
          <h1>Proyecto React</h1>
        </div>
        <Menu />
      </div>
    );
  }
}


export default Navbar;

import React from 'react';
import './Menu.css';
import menu from '../../menu.png';

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(event) {
    event.preventDefault();
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <div className="menu">
        <div className="menu-button">
          <input type="image" src={menu} onClick={this.handleClick} alt=""/>
        </div>
        <div className={this.state.visible?'visible':'no-visible'}>
          <ul>
            <li><a className="menu-link" href='../'>Juegos puzzle</a></li>
            <li><a className="menu-link" href='../'>Calendario</a></li>
            <li><a className="menu-link" href='../'>Tienda</a></li>
            <li><a className="menu-link" href='../'>Contacto</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;

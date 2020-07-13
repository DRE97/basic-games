import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import TriquiGame from './components/TriquiGame/TriquiGame';
import Concentrese from './components/ConcentreseGame/Concentrese';
import DoorsGame from './components/DoorsGame/DoorsGame';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/triqui" component={TriquiGame} />
      <Route exact path="/concentrese" component={Concentrese} />
      <Route exact path="/doors-game" component={DoorsGame} />
    </Switch>
  );
}


export default Routes;

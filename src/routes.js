import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/home';
import Details from './pages/details';
import NotFound from './pages/notFound';
import About from './pages/about';

function Routes(){
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/details/:id" component={Details}/>
      <Route path="/about" component={About}/>
      <Route component={NotFound}/>
    </Switch>
  );
}

export default Routes;
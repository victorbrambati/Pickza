import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Size from './pages/Size';
import Crust from './pages/Crust';
import Toppings from './pages/Toppings';
import Check from './pages/Check';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={() => <Size />} />
        <Route path="/crust" component={() => <Crust />} />
        <Route path="/toppings" component={() => <Toppings />} />
        <Route path="/check" component={() => <Check />} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;

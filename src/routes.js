import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './view/home/HomePage';
import WalletPage from './view/wallet/WalletPage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/wallet' component={WalletPage} />
    </Switch>
  );
};

export default Routes;

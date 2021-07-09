import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './view/home/HomePage';
import InformationPage from './view/information/InformationPage';
import LaunchStepOne from './view/launch-steps/LaunchStepOne';
import LaunchStepThree from './view/launch-steps/LaunchStepThree';
import LaunchStepTwo from './view/launch-steps/LaunchStepTwo';
import WalletPage from './view/wallet/WalletPage';
// import Dapp from './components/Dapp'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/wallet/step-one' component={LaunchStepOne} />
      <Route exact path='/wallet/step-two' component={LaunchStepTwo} />
      <Route exact path='/wallet/step-three' component={LaunchStepThree} />
      <Route exact path='/wallet' component={WalletPage} />
      <Route exact path='/information' component={InformationPage} />
      {/* <Route exact path='/wallet/dashboard' component={Dapp} /> */}
    </Switch>
  );
};

export default Routes;

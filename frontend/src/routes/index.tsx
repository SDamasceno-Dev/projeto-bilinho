/**
 * @file: Route
 * @info: Component to define the App routes
 */

// Dependencies import
import React from 'react';
import { Switch } from 'react-router-dom';

// Components import
import Route from './Route';

// Pages import
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;

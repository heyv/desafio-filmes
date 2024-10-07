import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Details from '../pages/Details';
import MyList from '../pages/MyList';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/login" exact component={Login} />

    <Route path="/home" component={Home} isPrivate />
    <Route path="/details/:id+" component={Details} isPrivate />
    <Route path="/mylist" component={MyList} isPrivate />
  </Switch>
);

export default Routes;

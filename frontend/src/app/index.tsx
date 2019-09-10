import * as React from 'react';
import { MainPage } from 'app/containers/MainPage';
import { Root } from 'app/containers/Root';
import { hot } from 'react-hot-loader/root';
import { Route, Router, Switch } from 'react-router';
import { UserPage } from './containers/UserPage';

// render react DOM
export const app = hot(({ history }) => (
  <Root>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/user/:id" component={UserPage} />
      </Switch>
    </Router>
  </Root>
));

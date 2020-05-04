import React, { Fragment } from 'react';
import { PrivateLayout, PublicLayout, NotLoggedInLayout } from '@layouts';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import {
  Login,
  Register,
  PageNotFound,
  RegistrationSuccess,
  IoTGraph
} from './containers';

const privateRoutes = [
  {
    id: 'iot-graph',
    path: '/iot-graph',
    component: IoTGraph
  }
];

const Routes = () => (
  <Router basename={'/Solid-IoT'}>
    <Fragment>
      <Switch>
        <NotLoggedInLayout component={Login} path="/login"  />
        <NotLoggedInLayout component={Register} path="/register"  />
        <NotLoggedInLayout path="/register/success" component={RegistrationSuccess}  />
        <PublicLayout path="/404" component={PageNotFound}  />
        <Redirect from="/" to="/iot-graph"  />
        <PrivateLayout path="/" routes={privateRoutes} />
        <Redirect to="/404" />
      </Switch>
    </Fragment>
  </Router>
);

export default Routes;

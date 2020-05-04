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

const basename = process.env.PUBLIC_URL; // Run on subdirectory?

const privateRoutes = [
  {
    id: 'iot-graph',
    path: '/iot-graph',
    component: IoTGraph
  }
];

const Routes = () => (
  <Router basename={basename}>
    <Fragment>
      <Switch>
        <NotLoggedInLayout component={Login} path={ "/login"} exact />
        <NotLoggedInLayout component={Register} path={ "/register"} exact />
        <NotLoggedInLayout path={ "/register/success"} component={RegistrationSuccess} exact />
        <PublicLayout path={"/404"} component={PageNotFound} exact />
        <Redirect from={"/"} to={ "/iot-graph"} exact />
        <PrivateLayout path={ "/"} routes={privateRoutes} />
        <Redirect to={ "/404"} />
      </Switch>
    </Fragment>
  </Router>
);

export default Routes;

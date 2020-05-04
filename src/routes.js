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
        <NotLoggedInLayout component={Login} path={basename + "/login"} exact />
        <NotLoggedInLayout component={Register} path={basename + "/register"} exact />
        <NotLoggedInLayout path={basename + "/register/success"} component={RegistrationSuccess} exact />
        <PublicLayout path={basename + "/404"} component={PageNotFound} exact />
        <Redirect from={basename + "/"} to={"/iot-graph"} exact />
        <PrivateLayout path={basename + "/"} routes={privateRoutes} />
        <Redirect to="/404" />
      </Switch>
    </Fragment>
  </Router>
);

export default Routes;

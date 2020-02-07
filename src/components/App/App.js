import React from "react";
import { Navigation, LandingPage } from '../../pages/index';
import { Layout } from '../../styleComponents/index'
import * as ROUTES from '../../constants/Routes/routes'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => (
  <Router>
    <Layout>

      <Navigation />
      <Switch>
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
      </Switch>

    </Layout>
  </Router>
);

export default App
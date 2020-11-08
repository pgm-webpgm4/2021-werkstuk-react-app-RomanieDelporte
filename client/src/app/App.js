import React from 'react';
import { RouteWithLayout } from './utilities';
import { BaseLayout } from './layouts';

import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import {ShampooPage, ShampooDetailPage, MasksPage, MasksDetailPage, ConditionerPage, ConditionerDetailPage, HomePage, ContactPage, AdminPage} from './pages'
import './App.scss';
import * as Routes from './routes';


function App() {
  return (
    <div className="App">
     <Router>
              <Switch>
                <RouteWithLayout exact path={Routes.LANDING} layout={ BaseLayout } component={ HomePage }/>
                <Redirect from={Routes.HOME} to={Routes.LANDING}/>
                <RouteWithLayout exact path={Routes.SHAMPOO} layout={ BaseLayout } component={ ShampooPage }/>
                <RouteWithLayout exact path={Routes.SHAMPOO_DETAIL} layout={ BaseLayout } component={ ShampooDetailPage }/>
                <RouteWithLayout exact path={Routes.CONDITIONER} layout={ BaseLayout } component={ ConditionerPage }/>
                <RouteWithLayout exact path={Routes.CONDITIONER_DETAIL} layout={ BaseLayout } component={ ConditionerDetailPage }/>
                <RouteWithLayout exact path={Routes.MASKS} layout={ BaseLayout } component={ MasksPage }/>
                <RouteWithLayout exact path={Routes.MASKS_DETAIL} layout={ BaseLayout } component={ MasksDetailPage }/>
                <RouteWithLayout exact path={Routes.CONTACT} layout={ BaseLayout } component={ ContactPage }/>
                <RouteWithLayout exact path={Routes.REGISTER} layout={ BaseLayout } component={ AdminPage }/>
              </Switch>
            </Router>
    </div>
  );
}

export default App;

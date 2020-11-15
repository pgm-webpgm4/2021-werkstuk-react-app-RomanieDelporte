import React from 'react';
import { RouteWithLayout } from './utilities';
import { BaseLayout } from './layouts';

import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import {ProductsPage, ProductsDetailPage, MasksPage, MasksDetailPage, ConditionerPage, ConditionerDetailPage, HomePage, ContactPage, AdminPage, LoginPage, CartPage} from './pages'
import './App.scss';
import * as Routes from './routes';


function App() {
  return (
    <div className="App">
     <Router>
              <Switch>
                <RouteWithLayout exact path={Routes.LANDING} layout={ BaseLayout } component={ HomePage }/>
                <Redirect from={Routes.HOME} to={Routes.LANDING}/>
                <RouteWithLayout exact path={Routes.PRODUCTS} layout={ BaseLayout } component={ ProductsPage }/>
                <RouteWithLayout exact path={Routes.PRODUCTS_DETAIL} layout={ BaseLayout } component={ ProductsDetailPage }/>
                <RouteWithLayout exact path={Routes.CONDITIONER} layout={ BaseLayout } component={ ConditionerPage }/>
                <RouteWithLayout exact path={Routes.CONDITIONER_DETAIL} layout={ BaseLayout } component={ ConditionerDetailPage }/>
                <RouteWithLayout exact path={Routes.MASKS} layout={ BaseLayout } component={ MasksPage }/>
                <RouteWithLayout exact path={Routes.MASKS_DETAIL} layout={ BaseLayout } component={ MasksDetailPage }/>
                <RouteWithLayout exact path={Routes.CONTACT} layout={ BaseLayout } component={ ContactPage }/>
                <RouteWithLayout exact path={Routes.REGISTER} layout={ BaseLayout } component={ AdminPage }/>
                <RouteWithLayout exact path={Routes.LOGIN} layout={ BaseLayout } component={ LoginPage }/>
                <RouteWithLayout exact path={Routes.CART} layout={ BaseLayout } component={ CartPage }/>
              </Switch>
            </Router>
    </div>
  );
}

export default App;

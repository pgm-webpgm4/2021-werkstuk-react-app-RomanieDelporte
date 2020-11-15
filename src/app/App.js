import React from 'react';
import { RouteWithLayout } from './utilities';
import { BaseLayout } from './layouts';

import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import {ProductsPage, ProductsDetailPage, HomePage, ContactPage, AdminPage, LoginPage, CartPage, CheckoutPage} from './pages'
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
                <RouteWithLayout exact path={Routes.CONTACT} layout={ BaseLayout } component={ ContactPage }/>
                <RouteWithLayout exact path={Routes.REGISTER} layout={ BaseLayout } component={ AdminPage }/>
                <RouteWithLayout exact path={Routes.LOGIN} layout={ BaseLayout } component={ LoginPage }/>
                <RouteWithLayout exact path={Routes.CART} layout={ BaseLayout } component={ CartPage }/>
                <RouteWithLayout exact path={Routes.CHECKOUT} layout={ BaseLayout } component={ CheckoutPage }/>
              </Switch>
            </Router>
    </div>
  );
}

export default App;

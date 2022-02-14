import HomePage from './pages/homepage/homepage.component';
import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
  );
}

export default App;

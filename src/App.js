import React from 'react';
import './App.scss';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import BankList from './components/BanksList';
import Favourites from './components/Favourites';
import BankDetails from './components/BankDetails';
import Header from './components/Header';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Switch>
        {/* <Route exact path="/" render={() => (
            <Redirect to="/banks"/>
        )}/> */}
        <Route path="/" component={BankList} exact />
        <Route path="/banks/favourites" component={Favourites} exact />
        <Route path="/banks/:id" component={BankDetails} exact />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;

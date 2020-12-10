import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import './App.scss';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <div className="main">
          <Switch>
            <Route path="/about/:id/:date">
              <h1>Текстовая</h1>
            </Route>
            <Route path="/">
              <h1>Калькулятор</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

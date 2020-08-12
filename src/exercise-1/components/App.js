import React, {Component} from 'react';
import '../styles/App.css';
import './Header.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './Home'
import Profile from './Profile'
import About from './About'
import Products from './Products'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/my-profile' component={Profile} />
            <Route path='/about-us' component={About} />
            <Route path='/products' component={Products} />
            <Route path='/goods' component={Products} />
            <Route component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

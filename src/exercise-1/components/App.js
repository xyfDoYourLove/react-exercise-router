import React, {Component} from 'react';
import '../styles/App.css';
import './Header.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header'
import Home from './Home'
import Profile from './Profile'
import About from './About'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/my-profile' component={Profile} />
            <Route exact path='/about-us' component={About} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Home'
import Profile from './Profile'
import About from './About'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <ul>
              <li>
                  <Link to='/'>Home</Link>
              </li>
              <li>
                  <Link to='/my-profile'>Profile</Link>
              </li>
              <li>
                  <Link to='/about-us'>About</Link>
              </li>
          </ul>


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

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Resume from './Resume';
import Contact from './Contact';
import NoMatch from './NoMatch';
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';


class App extends Component {
  render() {
    return (
      <>
            <Router>
              <NavBar />
              <Jumbotron />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/resume" component={Resume} />
                <Route path="/contact" component={Contact} />
                <Route component={NoMatch} />
              </Switch>
            </Router>
      </>
    );
  }
}

export default App;
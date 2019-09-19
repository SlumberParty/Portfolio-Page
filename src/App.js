import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Resume from './Resume';
import Contact from './Contact';
import NoMatch from './NoMatch';
import Layout from './components/Layout';
import NavBar from './components/NavBar';


class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <Router>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/resume" component={Resume} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </>
    );
  }
}

export default App;
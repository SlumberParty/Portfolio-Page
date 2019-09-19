import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Resume from './components/Resume';
import Contact from './components/Contact';
import NoMatch from './components/NoMatch';


function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/resume" component={Resume} />
        <Route  path="/contact" component={Contact} />
        <Route component={NoMatch} /> 
      </Switch>
    </Router>
    </>
  );
}

export default App;

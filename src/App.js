import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/" component={Resume} />
        <Route  path="/" component={Contact} />
        <Route component={NoMatch} /> 
      </Switch>
    </Router>
    </>
  );
}

export default App;

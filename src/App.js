import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
        <BrowserRouter>
          <Jumbotron />
          <NavBar />
          <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/resume" component={Resume} />
            <Route path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
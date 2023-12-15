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
      <BrowserRouter>
        <NavBar />
        <Jumbotron />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/contact' element={<Contact />} />
          <Route element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
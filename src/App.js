import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Resume from './Resume';
import Contact from './Contact';
import Portfolio from './components/Portfolio';
import NoMatch from './NoMatch';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar fixed="top"/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/portfolio' element={<Portfolio/>} />
          <Route element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
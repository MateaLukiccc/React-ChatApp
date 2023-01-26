import React from 'react';
// react router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';
const ReactRouterSetup = () => {
  //Switch makes it so first page that matches is presented
  return <Router>
    <Navbar/>
    <Routes>
      <Route exact path="/"element={<Home/>}/>
      <Route exact path="/About" element={<About/>}/>
      <Route exact path="/Contact" element={<Contact/>}/>
      <Route exact path="/person/:id" element={<Person/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
  </Router>;
};

export default ReactRouterSetup;
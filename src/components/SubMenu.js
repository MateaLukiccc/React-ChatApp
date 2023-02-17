import React from 'react';
// react router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// pages
import LoginPage from './Home';
import About from './About';
import Contact from './ContactA2.js';
import Error from './Error';
// navbar
import Navbar from './Navbar';
const ReactRouterSetup = ({setIsAuth}) => {
  return <Router>
    <Navbar/>
    <Routes>
      <Route exact path="/"element={<LoginPage setIsAuth={setIsAuth}/>}/>
      <Route exact path="/About" element={<About/>}/>
      <Route exact path="/Contact" element={<Contact/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
  </Router>;
};

export default ReactRouterSetup;
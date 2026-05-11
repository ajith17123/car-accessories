import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {BrowserRouter, Route, Routes, HashRouter} from "react-router-dom";
import Body from './components/Body';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';
import Product from './components/Product';
import Login from './components/Login';

function App () {

useEffect(() => {
    AOS.init({
        duration: 1000,
        once: false,
        startEvent: 'DOMContentLoaded', 
    });
    AOS.refresh(); 
}, []);

  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path='/' element={< Body />} />
        <Route path='/about' element={< About />} />
        <Route path='/login' element={< Login />} />
        <Route path='/product' element={< Product />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App;
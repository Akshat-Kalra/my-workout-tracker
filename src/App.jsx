// import { useState } from 'react'
import React from 'react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Logger from './pages/Logger';
import BasicLineChart from './components/Line';


function App() {

  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Home
      break
    case "/home":
      Component = Home
      break
    case "/dashboard":
      Component = Dashboard
      break
    case "/logger":
    Component = Logger
    break
  }

  return (
    <>
    <Navbar />
    <main>
      <Component />
    </main>
    </>
  )
}

export default App;

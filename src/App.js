import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Nav from './Nav'
import Routes from './Routes'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Nav />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;

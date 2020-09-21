import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter basename='/'>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </div>
    </HashRouter>
  );
}

export default App;

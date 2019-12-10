import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/layout/Nav';
import Hero from './components/layout/Hero';
import Content from './components/layout/Content';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Hero />
        <Switch>
          <Route path='/' component={Content}></Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;

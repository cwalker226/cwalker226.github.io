import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <header>
          <NavTabs/>
        </header>
        <div className="container mainContent">
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </div>
        <footer>
          <Footer/>
        </footer>        
      </div>
    </Router>
  );
}

export default App;

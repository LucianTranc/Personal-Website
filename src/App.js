import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import About from './pages/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={About} />
          <Route path='/experience' component={Experience} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;

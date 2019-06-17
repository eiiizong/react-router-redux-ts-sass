import React from 'react';
// import logo from './assets/img/logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './home';
import About from './about';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </div>
      <Route exact path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
    </Router>
  );
}

export default App;

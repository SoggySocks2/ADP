import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Toolbar from './components/Toolbar/toolbar';
import Home from './pages/home';
import Gallery from './pages/gallery';
import AboutUs from './pages/aboutUs';
import Email from './pages/email';
import Phone from './pages/phone';

class App extends React.Component {

  render() {
      return (
        <div className="app">
          <Router>
            <Toolbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/gallery" exact component={Gallery} />
              <Route path="/aboutus" exact component={AboutUs} />
              <Route path="/email" exact component={Email} />
              <Route path="/phone" exact component={Phone} />
            </Switch>
          </Router>
        </div>
      );
  };
}




export default App;

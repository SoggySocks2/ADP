import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Toolbar from './components/Toolbar/toolbar';
import Home from './pages/home';
import Gallery from './pages/gallery';
import AboutUs from './pages/aboutUs';

class App extends React.Component {

  handleEmailClick = () => {
    alert('email clicked');
  }

  handlePhoneClick = () => {
    alert('phone clicked');
  }

  render() {
      return (
        <div className="app">
          <Router>
            <nav><Toolbar emailClick={this.handleEmailClick} phoneClick={this.handlePhoneClick} /></nav>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/gallery" exact component={Gallery} />
              <Route path="/aboutUs" exact component={AboutUs} />
            </Switch>
          </Router>
        </div>
      );
  };
}




export default App;

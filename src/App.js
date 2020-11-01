import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Toolbar from './components/toolbar/toolbar';
import Home from './pages/home';
import Gallery from './pages/gallery';
import AboutUs from './pages/aboutUs';
import Email from './pages/email';
import Phone from './pages/phone';
import Footer from './components/footer/footer';

class App extends React.Component {

  render() {
      return (
        <div className="app">
          <Router>
            <Toolbar />
            <div className="mainContent">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/gallery" exact component={Gallery} />
                <Route path="/aboutus" exact component={AboutUs} />
                <Route path="/email" exact component={Email} />
                <Route path="/phone" exact component={Phone} />
              </Switch>
            </div>
            <div className="pageSpacer" />
            <Footer />
          </Router>
        </div>
      );
  };
}




export default App;

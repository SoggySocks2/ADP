import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Toolbar from './components/toolbar/toolbar';
import Home from './pages/home';
import Gallery from './pages/gallery';
import AboutUs from './pages/aboutUs';
import ContactUs from './pages/contactUs';
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
                <Route path="/gallery" component={Gallery} />
                <Route path="/aboutus" component={AboutUs} />
                <Route path="/contactus" component={ContactUs} />
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

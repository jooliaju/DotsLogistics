import './App.css';
import React, { Component } from "react";

//Import all needed Component for this tutorial
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

//pages
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFound';
import Dashboard from './pages/Dashboard';


class App extends Component {
  render() {
    return (
      <Router>
        
        <Switch>
          {/*All our Routes goes here!*/}
            <Route exact path="/" component={HomePage} />
            <Route exact path="/dash" component={Dashboard} />
            <Route exact path="/404" component= {NotFoundPage} />
            <Redirect to = "/404" />
        </Switch>
       
       
      </Router>
    );
  }
}

export default App;

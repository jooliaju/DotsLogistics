import "./App.css";
import React, { Component } from "react";

//Import all needed Component for this tutorial
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

//pages
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Marketplace from "./pages/Marketplace.js";
import RequestQuote from "./pages/RequestQuote.js";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/*All our Routes goes here!*/}
          <Route exact path="/" component={HomePage} />
          <Route exact path="/dash" component={Dashboard} />
          <Route exact path="/404" component={NotFoundPage} />
          <Route
            exact
            path="/marketplace"
            render={(props) => {
              return <Marketplace {...props} />;
            }}
          />
          <Route
            exact
            path="/requestquote/:bus"
            render={(props) => {
              return <RequestQuote {...props} />;
            }}
          />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

export default App;

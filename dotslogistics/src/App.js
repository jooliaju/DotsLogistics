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
import Customers from "./pages/Customers";
import Invoice from "./pages/Invoice";

import SignUp from "./pages/SignUp.js";
import SignIn from "./pages/SignIn.js";
import Pricing from "./pages/Pricing";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { signedIn: false };
  }

  signedIn = () => {
    this.setState({ signedIn: true });
  };

  logOut = () => {
    this.setState({ signedIn: false });
  };

  render() {
    return (
      <Router>
        <Switch>
          {/*All our Routes goes here!*/}
          <Route
            exact
            path="/"
            render={(props) => {
              return (
                <HomePage
                  {...props}
                  signedIn={this.state.signedIn}
                  logOut={this.logOut}
                />
              );
            }}
          />
          <Route
            exact
            path="/pricing"
            render={(props) => {
              return (
                <Pricing
                  {...props}
                  signedIn={this.state.signedIn}
                  logOut={this.logOut}
                />
              );
            }}
          />
          <Route
            exact
            path="/dash"
            render={(props) => {
              return (
                <Dashboard
                  {...props}
                  signedIn={this.state.signedIn}
                  logOut={this.logOut}
                />
              );
            }}
          />
          <Route
            exact
            path="/customers"
            render={(props) => {
              return (
                <Customers
                  {...props}
                  signedIn={this.state.signedIn}
                  logOut={this.logOut}
                />
              );
            }}
          />
          <Route
            exact
            path="/invoice"
            render={(props) => {
              return (
                <Invoice
                  {...props}
                  signedIn={this.state.signedIn}
                  logOut={this.logOut}
                />
              );
            }}
          />

          <Route exact path="/404" component={NotFoundPage} />
          <Route
            exact
            path="/signin"
            render={(props) => {
              return <SignIn {...props} signedIn={this.signedIn} />;
            }}
          />
          <Route
            exact
            path="/signup"
            render={(props) => {
              return <SignUp {...props} signedIn={this.signedIn} />;
            }}
          />
          <Route
            exact
            path="/marketplace"
            render={(props) => {
              return (
                <Marketplace
                  {...props}
                  signedIn={this.state.signedIn}
                  logOut={this.logOut}
                />
              );
            }}
          />
          <Route
            exact
            path="/requestquote/:bus"
            render={(props) => {
              return (
                <RequestQuote
                  {...props}
                  signedIn={this.state.signedIn}
                  logOut={this.logOut}
                />
              );
            }}
          />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

export default App;

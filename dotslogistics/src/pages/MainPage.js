import { HashRouter, Route, Switch, withRouter } from "react-router-dom";
import React, { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const routes = (
      <HashRouter>
        <div>
          <Switch>
            <Route
              path="/marketplace"
              render={(props) => {
                return <Marketplace {...props} />;
              }}
            />
            <Route
              path="/requestquote/:bus"
              render={(props) => <RequestQuote {...props} />}
            />
          </Switch>
        </div>
      </HashRouter>
    );

    return <Scaffold child={routes} />;
  }
}

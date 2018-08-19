import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/Profile";
import Comments from "./components/Comments";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    const { path } = this.props.match;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="links">
          <Link to={`${path}`} className="link">
            Profile
          </Link>
          <Link to={`${path}/comments`} className="link">
            Comments
          </Link>
          <Link to={`${path}/contact`} className="link">
            Contact
          </Link>
        </div>
        <div className="tabs">
          <Switch>
            <Route path={`${path}`} exact component={Profile} />
            <Route path={`${path}/comments`} component={Comments} />
            <Route path={`${path}/contact`} component={Contact} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

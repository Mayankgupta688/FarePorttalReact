import React from "react";

import { BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom";

export default class SimpleRouting extends React.Component {

  constructor() {
    super();
    this.state = {
      name: "Mayank"
    }
  }

  render() {
    return (
      <BrowserRouter>

        <nav>
          <NavLink activeClassName="activated-link" style={{"marginRight": "10px"}} to="/">Home</NavLink>
          <NavLink activeClassName="activated-link" style={{"marginRight": "10px"}} to="/about">About</NavLink>
          <NavLink activeClassName="activated-link" style={{"marginRight": "10px"}} to="/help">Help</NavLink>
        </nav>

        <Route exact path="/" render={() => <HomeComponent {...this.state} {...this.props} />} />
        <Route exact path="/about" component={AboutComponent} />
        <Route exact path="/help" component={HelpComponent} />
      </BrowserRouter>
    )
  }
}

function HomeComponent(props) {
  return <h1>This is Home {props.name} {props.age}</h1>
}

function AboutComponent() {
  return <h1>This is About CComponent</h1>
}

function HelpComponent() {
  return <h1>This is Help CComponent</h1>
}
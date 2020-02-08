import React from 'react';
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";

export default class SimpleRouting extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <h1>Hello this is Sample Rendering Application</h1>

                <nav>
                    <Link style={{"marginRight": "10px"}} to="/">Home</Link>
                    <Link style={{"marginRight": "10px"}} to="/about/:id">About</Link>
                    <Link style={{"marginRight": "10px"}} to="/help">Help</Link>

                </nav>

                <Switch>

                    <Route path="/about" component={AboutComponent} />
                    <Route path="/help" component={HelpComponent} />
                    <Route path="/" component={HomeComponent} />
                    
                </Switch>
                
            </BrowserRouter>
        )
    }
}

function HomeComponent() {
    return (
        <h1>This is Home Component</h1>
    )
}

function AboutComponent() {
    return <h2>This is About Component</h2>
}

function HelpComponent() {
    return <h2>This is Help Component</h2>
}

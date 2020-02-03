import React from "react";

export default class ParentChildDataUpdates extends React.Component {
    debugger;
    name = "Mayank"
    state = {
        counter: 1,
        name: "Mayank"
    }

    constructor() {
        super();
        debugger;
        alert(this.name)
        alert(this.state.name)
    }

    shouldComponentUpdate() {
        return false;
    }

    updateCounter = () => {

        this.state = {
            xyz: "sdgisdi"
        }

        this.setState({
            counter: this.state.counter + 1
        })
    }

    updateComponent = () => {
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <h1>Parent Counter: {this.state.counter}</h1>
                <input type="button" onClick={this.updateCounter} value="Update" /><br/>
                <input type="button" onClick={this.updateComponent} value="Force" />
                <ChildComponent counter={this.state.counter} />
                
            </div>
        )
    }
}

class ChildComponent extends React.Component {

    shouldComponentUpdate() {
        return false;
    }

    updateComponent = () => {
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <h1>Child Counter: {this.props.counter}</h1>
                <input type="button" value="Update Child" onClick={this.updateComponent} />
            </div>
        )
    }
}
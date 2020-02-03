import React, { Component } from "react";

export default class AddingStateToComponent extends Component {

    constructor() {
        super();
        this.setState({
                seconds: new Date().getSeconds()
        });
        
        setInterval(() => {
            this.setState({
                seconds: new Date().getSeconds()
            })
        }, 1000)
    }

    render() {
        return (
            <div>
                <h1>Parent Timer: {this.state?this.state.seconds: ""}</h1>;
                <TimerDisplay seconds={this.state?this.state.seconds: ""} />
            </div>
        )
    }
}

function TimerDisplay(props) {
    return <h1>Child Timer: {props.seconds}</h1>
}

export class ClassComponent extends Component {
    render() {
        return <h1>Hello This is Class Component...{this.props.user.name}</h1>
    }
}

export function SimilarComponent() {
    var data = {
        name: "Mayank"
    }

    setTimeout(() => {
        data.name = "Anshul"
    }, 2000)

    return <h1>Data for {data.name}</h1>;
}
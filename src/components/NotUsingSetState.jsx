import React from "react";


export default class NotUsingSetState extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
            name: "Mayank"
        }
    }

    UpdateCounterCorrectly = () => {
        debugger;
        this.state.counter = 10;
        alert(this.state.counter)
    }

    UpdateCounter = () => {
        this.render();
    }

    render() {
        return (
            <div>
                <h1>Timer: {this.state.counter} {this.state.name}</h1>
                <input type="button" value="Click To Update" onClick={this.UpdateCounterCorrectly} />
                <input type="button" value="Click To Update Correctly" onClick={this.UpdateCounter} />
            </div>
        )
    }
}
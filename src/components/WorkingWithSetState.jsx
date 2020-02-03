import React from "react";

export default class WorkingWithSetState extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 1,
            name: "Xyz"
        }

            this.setState({
                counter: this.state.counter + 1
            })

            this.setState({
                counter: this.state.counter + 1
            })

            this.setState({
                name: "Mayank"
            })

        
    }

    render() {
        return <h1>Counter: {this.state.counter} {this.state.name}</h1>
    }
}
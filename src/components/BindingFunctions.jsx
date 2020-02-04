import React from 'react';

export default class BindingFunctions extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Mayank"
        }

        this.getData = this.getData.bind(this)
    }

    getData(a, b) {
        debugger;
        this.setState({
            name: "Anshul"
        })
    }
    
    render() {

        var dataOne = 10;
        var dataTwo = 20;
        return (
            <div>
                <h1>User Name: {this.state.name}</h1>
                <input type="button" onClick={() => this.getData(dataOne, dataTwo)} value="Click" />
            </div>
        )
    }
}
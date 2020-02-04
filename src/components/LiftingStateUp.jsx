import React from 'react';

export default class LiftingStateUp extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Random"
        }

        this.updateName = this.updateName.bind(this);
    }

    updateName(data) {
        this.setState({
            name: data
        })
    }

    render() {
        return (
            <>
            <h1>Parent Data: {this.state.name}</h1>
            <ChildComponent userName={this.state.name} updateName={this.updateName}></ChildComponent>
            </>
        )
    }
}

function ChildComponent(props) {
    var data = 10;

    function updateName() {
        alert("Hello");
        props.updateName(100);
    }
    return (
        <>
            <h2>Data from  Child: {props.userName}</h2>
            <input type="button" value="Update Name" onClick={() => updateName(data)} />
        </>
    )
}
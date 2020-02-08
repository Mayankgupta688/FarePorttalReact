import React from 'react';


export function ChildComponentOne() {
    return <h2>This is Child Component One</h2>
}

export function ChildComponentTwo() {
    return <h2>This is Child Component Two</h2>
}

export default class WorkingWithChildren extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Mayank"
        }
    }

    render() {

        var ArrayOfComponent = [ChildComponentOne, ChildComponentTwo, ChildComponentOne]
        debugger;
        return (
            <>
                <h1>This is Working with Child Components</h1>
                {this.props.children}
            </>
        )
    }
}


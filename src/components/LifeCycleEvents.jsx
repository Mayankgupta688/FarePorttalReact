import React from 'react';


export default class ParentClass extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Mayank",
            age: 10
        }
    }

    updateData() {
        this.setState({
            name: "Updated..."
        })
    }

    render() {
        return (
            <>
                <LifeCycleEvents userName={this.state.name} userAge={this.state.age} />
                <input type="button" onClick={this.updateData.bind(this)} value="Click To Update" />
            </>
        )
    }

    componentDidUpdate() {
        console.log("Parent Component Update")
    }

    componentDidMount() {
        console.log("Parent Mounted")
    }
}

class LifeCycleEvents extends React.Component {
    constructor(props) {
        console.log("Component Constructor")
        super(props);
        this.state = {
            name: this.props.userName
        }
    }

    static getDerivedStateFromProps(props) {
        console.log("Static Get State")
        return {
            age: props.userAge,
            name: props.userName
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        debugger;
        console.log("Updation: Should Component Update")
        return true;
    }

    

    render() {
        console.log("Component Rendered")
        return (
            <>
                <h1>User Name: {this.state.name} {this.state.age}</h1>
                
            </>
        )
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        debugger
        console.log("Static Snapshot Function Called...")
        return {
            val: 100
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        debugger;
        console.log("Child Component Updated")
    }

    componentDidMount() {
        console.log("Child Component Mounted")
    }
}
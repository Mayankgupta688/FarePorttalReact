import React, { Component } from "react";

export class ParentClassComponent extends Component {
    render() {
        return (
            <div>
                <h1>Hello Parent...</h1>
                <ClassComponent user={this.props.user}/>
            </div>
        
        )
    }
}

export default class ClassComponent extends Component {
    render() {
        return <h1>Hello This is Class Component...{this.props.user.name}</h1>
    }
}

export class ClassComponentOther extends Component {
    render() {
        return <h1>Hello This is Class Other Component...{this.props.user.name}</h1>
    }
}
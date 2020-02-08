import React from 'react';
import PropTypes from 'prop-types';

export default class WorkingWithProps extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: "Mayank",
            userDesignation: 10,
            userAge: false,
        }
    }

    render() {
        return (
            <User {...this.state}></User>
        )
    }
}

class User extends React.Component {
    render() {
        return (
            <div>
                <div>{this.props.userName}</div>
                <div>Data: {typeof (this.props.userAge) == "boolean"? "Some Value": "Error"}</div>
                <div>{this.props.userDesignation}</div>
            </div>
        )
    }
}

User.propTypes = {
    userName: PropTypes.number,
    userDesignation: PropTypes.string,
    userAge: PropTypes.number
}
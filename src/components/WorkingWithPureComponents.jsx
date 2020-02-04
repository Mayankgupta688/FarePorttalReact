import React from 'react';

function ChildComponent(props) {
    debugger;
    return <h2>Data from Child: {props.userName}</h2>
}

var MemorizedComponent = React.memo(ChildComponent)

export default class WorkingWithPureComponents extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            user: {
                name: "Mayank"
            }
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                user: {
                    name: "Mayank"
                }
            });
        }, 2000);
    }

    render() {
        debugger;
        return (
            <>
                <h1>User Name: {this.state.user.name}</h1>
                <MemorizedComponent userName={this.state.user.name} />
            </>
        )
    }
}




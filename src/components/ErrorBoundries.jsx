import React from 'react';

export default class ErrorBoundries extends React.Component {

    constructor() {
        super();
        this.state = {
            isError: false
        }
    }

    componentDidCatch(error) {
        console.dir(error)
    }

    static getDerivedStateFromError() {
        return {
            isError: true
        }
    }

    render() {
        return (
            <>
                {!this.state.isError && <ChildComponent />}
                {this.state.isError && <ThrowError />}
            </>
        )
    }
}

function ThrowError() {
    return <h1>Flight Already Exists</h1>;
}

class ChildComponent extends React.Component {
    constructor() {
        super();
        this.updateName = this.updateName.bind(this);
        this.state = {
            flightDetails: {
                flightName: "Indigo",
                flightNumber: "100"
            }
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextState.flightDetails.flightName == "AirAsia") {
            throw new Error("Flight Already Exists")
        }

        return true;
    }

    updateName(event) {

        this.setState({
            flightDetails: {
                ...this.state.flightDetails,
                flightName: event.target.value,
            }
        })
    }

    render() {

        return (
            <>
                <h1>Flight Number: {this.state.flightDetails.flightNumber}</h1>
                <input type="text" value={this.state.flightDetails.flightName} onChange={this.updateName} />
                <input type="button" value="Get Updated Flight Name" onClick={() => alert(this.state.flightDetails.flightName)} />
            </>
        )
    }
}
import React from "react";


export default class ShouldComponentUpdate extends React.Component {
    constructor(props) {
        super();
        this.state = {
            counter: 0,
            name: props.user.name
        }
    }

    UpdateCounterCorrectly = () => {
        this.props.user.name = "New Name";
        this.setState({
            counter: this.state.counter + 1
        }, () => {
            alert(this.state.counter)
        })

        
    }

    shouldComponentUpdate() {
        if(this.state.counter == 1) {
            return true
        }
        return true;
    }

    UpdateCounter = () => {
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <h1>Timer: {this.state.counter} {this.props.user.name}</h1>
                <input type="button" value="Click To Update" onClick={this.UpdateCounterCorrectly} />
                <input type="button" value="Click To Update Correctly" onClick={this.UpdateCounter} />
            </div>
        )
    }
}
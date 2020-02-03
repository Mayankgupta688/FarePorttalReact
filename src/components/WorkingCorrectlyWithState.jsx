import React from "react";

export default class WorkingCorrectlyWithState extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
            name: "Mayank"
        }
    }

    updateCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        }, () => {
            this.setState({
                counter: this.state.counter + 1
            }, () => {
                this.setState({
                    counter: this.state.counter + 1
                });
            });
        });

        this.setState({
            name: this.state.name + " Gupta"
        })
    }

    UpdateCounterCorrectly = () => {
        this.setState((state) => {
            return {
                counter: state.counter + 1
            }
        });

        this.setState((state) => {
            return {
                counter: state.counter + 1
            }
        })

        this.setState((state) => {
            return {
                counter: state.counter + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Timer: {this.state.counter} {this.state.name}</h1>
                <input type="button" value="Click To Update" onClick={this.updateCounter} /><br/><br/>
                <input type="button" value="Click To Update Correctly" onClick={this.UpdateCounterCorrectly} />
            </div>
        )
    }
}
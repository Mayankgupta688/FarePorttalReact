import React from 'react';

export default class WorkingWithUncontrolledElements extends React.Component {

    updateData = () => {
        alert(this.refs)
        this.refs.randomInputBox.value = "Random Text";
        debugger;
        this.refs.randomInputBox.style.color = "Red";
    }

    render() {
        return (
            <>
                Enter Random text: <input type="text" ref="randomInputBox" /><br/><br/>

                Enter Other Random text: <input type="text" ref="randomInputBox" /><br/><br/>
                
                <input type="button" onClick={this.updateData} value="Click" />
            </>
        )
    }
}
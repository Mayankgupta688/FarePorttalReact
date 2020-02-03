import React from "react";

export default class PureComponents extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Mayank",
      age: 20
    }
  }

  updateData = () => {
    this.setState({
      name: "Mayank",
      age: 20
    })
  }

  render() {
    alert("Parent Component Rendered...")
    return (
      <>
      
        <h1>User Name: {this.state.name}</h1>
        <h1>User Age: {this.state.age}</h1>
        <input type="button" onClick={this.updateData} value="Update Data" />
        <ChildComponent name={this.state.name}></ChildComponent>
        <PureFunctionalComponents name={this.state.name}></PureFunctionalComponents>
      </>
    )
  }
}

class ChildComponent extends React.Component {
  render() {
    alert("Child Component Rendered...")
    return (
      <h1>This is the Child Component: {this.props.name}</h1>
    )
  }
}

function PureFunctionalComponents(props) {
  alert("Functional Child Component Rendered...")
  return (
    <h1>This is the Functional Child Component: {props.name}</h1>
  )
}

var MemoElement = React.memo(PureFunctionalComponents);
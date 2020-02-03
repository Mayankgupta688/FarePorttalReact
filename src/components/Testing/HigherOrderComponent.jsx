import React from "react";

function HigherOrderComponent(WrapperComponent) {
  return class HigherOrderClass extends React.Component {
    constructor() {
      super();
      this.state = {
        name: "Mayank",
        age: 20
      }
    }

    render() {
      return <WrapperComponent {...this.state}></WrapperComponent>
    }
  }
}

function EmployeeName(props) {
  return <h1>This is the User Name: {props.name}</h1>
}

function EmployeeAge(props) {
  return <h1>This is the User Age: {props.age}</h1>
}
var AgeComponent = HigherOrderComponent(EmployeeAge);
export default AgeComponent;
export var NameComponent = HigherOrderComponent(EmployeeName);
import React from "react";
import Axios from "axios";

export default class WorkingWithRefs extends React.Component {

  constructor() {
    super();
    this.state = {
      userList: []
    }
  }

  updateData = () => {
    this.refs.uncontrolled.value = "Mayank Gupta";
    this.refs.uncontrolled.style.backgroundColor = "blue";
    this.refs.uncontrolled.style.color = "red";
  }

  getData = async () => {
    var response = await Axios.get("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees");
    console.log(response.data[0].name);
  }

  render() {
    return (
      <>
        <h1>This is the Uncontrolled Elements for {this.state.userList.length}</h1>
        <input type="text" ref="uncontrolled" /><br/><br/>
        <input type="button" onClick={this.updateData} value="Click To Update" />
        <input type="button" onClick={this.getData} value="Click To Get Data" />
      </>
    )
  }
}

var getData = async () => {
  var response = await fetch("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees");
  var data = await response.json();
  console.log(data[0].name);
}

getData();
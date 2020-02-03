import React from "react";
import Axios from "axios";

export default class IteratingEmployeeList extends React.Component {
    constructor() {
        super();
        this.state = {
            employeeList: []
        }
    }

    getData = () => {
        debugger;
        Axios.get("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then((response) => {
            debugger;
            this.setState({
                masterEmployeeList: response.data,
                employeeList: response.data
            })
        })
    }

    updateTextBox = (event) => {

        this.setState({
            [event.target.name]: event.target.value,
            employeeList: this.state.masterEmployeeList.filter((emp) => {
                if(emp.name.indexOf(event.target.value) > -1) {
                    return true;
                }

                return false;
            })
        })
    }

    addEmployee = () => {
        this.setState({
            employeeList: [ {
                name: "Mayank",
                id: 0,
                createdAt: "asdgasi"
            },
                ...this.state.masterEmployeeList
            ]
        })
    }

    render() {
        return (
            <>
                <div>
                    <label>Filter Employee: </label>
                    <input type="text" onChange={this.updateTextBox} name="filterText" value={this.state.filterText} /><br/><br/>
                </div>

                {this.state.employeeList && this.state.employeeList.length != 0 && this.state.employeeList.map((emp, index) => {
                    return (
                        <div key={emp.id}><hr/>
                            <input type="text" />
                            <h1>Name: {emp.name}</h1>
                            <h2>User Id: {emp.id}</h2>
                            <h3>User Created On: {emp.createdAt}</h3><hr/>
                        </div>
                    )
                })}

                {this.state.employeeList && this.state.employeeList.length == 0 && <h1>No Data Exists</h1>}

                <input type="button" onClick={this.getData} value="Get Data" />
                <input type="button" onClick={this.addEmployee} value="Add Employee Data" />
            </>
        )
    }
}
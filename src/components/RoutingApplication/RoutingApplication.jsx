import React from 'react';
import Axios from 'axios';
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";

export default class RoutingApplication extends React.Component {
    constructor() {
        super();
        this.state= {
            employeeList: [],
            isDataEmpty: true
        }
    }

    componentDidMount() {
        Axios.get("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then((response) => {
            this.setState({
                employeeList: response.data,
                isDataEmpty: false
            })
        });
    }

    render() {
        return (
            <BrowserRouter>

                <h1>Employee Management Application</h1><hr/>

                <Route exact path="/" render={() => {
                    if(this.state.isDataEmpty == true) {
                        return <NoDataAvailable></NoDataAvailable>
                    }
                    return <HomeComponent employeeList={this.state.employeeList} />
                }} />

                <Route exact path="/about/:id/:name" render={(props) => {
                    var employeedata = this.state.employeeList.filter((emp) => emp.id == props.match.params.id)[0];
                    return <EmployeeComponent {...props} employeedata={employeedata} />
                }} />
            
            </BrowserRouter>
        )
    }
}

function EmployeeComponent(props) {

    debugger;

    function goBack() {
        debugger;
        props.history.goBack()
    }
    return (
        <>
            <h1>Employee Details</h1>
            <h2>Emp Id: {props.employeedata?props.employeedata.id: ""} {props.employeedata?props.employeedata.name: ""}</h2>
            <input type="button" value="Go Back" onClick={goBack} />
        </>
    )
}

function NoDataAvailable() {
    return <h1>No Data...</h1>
}

function HomeComponent(props) {
    return (
        <>
            { props.employeeList.map((emp) => {
                return (<>
                    <h1>Employee Name: {emp.name}</h1>
                    <Link to={`/about/${emp.id}/${emp.name}`}>About {emp.name}</Link>
                     <hr></hr>

                </>)
            })
        }
        </>
    )
}
import React from 'react';
import Axios from 'axios';

export default function ComponentForGeneral(props) {
    return (
        <>
            {props.employeeList.map((emp) => {
                return (<>
                    <h1>{emp.name}</h1>
                    <h1>{emp.id}</h1>
                </>)
            })}
        </>
    )
}

export function ComponentForHr(props) {
    debugger;
    return(
        <>
            {props.employeeList.map((emp) => {
                return (<>
                    <h1>{emp.name}</h1>
                    <h1>{emp.id}</h1>
                    <h1>{emp.createdAt}</h1>
                    <h1>{emp.avatar}</h1>
                </>)
            })}
        </>
    )
}

export function getHigherOrderComponents(WrappedComponent) {
    return class HigherOrderComponents extends React.Component {
        constructor() {
            super();
            this.state = {
                employeeList: []
            }

            debugger;
        }

        dataOnFunctionClick() {

        }

        componentDidMount() {
            Axios.get("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then((response) => {
                this.setState({
                    employeeList: response.data
                })
            })
            debugger;
        }
    
        render() {
            debugger;
            return <WrappedComponent employeeList={this.state.employeeList} />
        }
    }
}

// var ComponentGeneral = getHigherOrderComponents(ComponentForGeneral);
// var ComponentHr = getHigherOrderComponents(ComponentForHr);

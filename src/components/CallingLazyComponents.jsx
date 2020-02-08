import React, {lazy, Suspense} from "react";
import BindingFunctions from "./BindingFunctions";
import data from "./sample";
import Axios from "axios";


// Since we have the Lazy Loading, components are loaded in different chunks, making the main chunk less heavy..

// The following stuff can bring more performance in cases when there are multiple Comonents and when we are defining Routes..

export default class CallingLazyComponents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Lazy Load",
            isComponentLoaded: false
        }
        var data = data 

    }

    changeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    updateState = () => {
        this.setState({
            name: "X"
        })
    }

    async componentDidMount() {
        var response = await Axios.get("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees");
        console.dir(response.data)
        debugger;
    }

    render() {

        if(this.state.name === "Lazy Load....") {
            const LazyComponent = lazy(() => import("./LiftingStateUp"));
            return (
                <div>
                    <h1>This is the Base User: {this.state.name}</h1>
                    <Suspense fallback={<div>Loading...</div>}>
                        <LazyComponent />
                    </Suspense>
                </div>
            )
        }

        if(this.state.name == "X") {
            import("./LiftingStateUp").then((LiftingStateUp) => {
                console.dir("Component Loaded Dynamically")
            })
        }
        
        return (

            
            <div>
                <h1>This is the Base User: {this.state.name}</h1>
                <input type="button" onClick={this.updateState} value="Update" />
                <BindingFunctions/>
            </div>
        )
        
    }
}

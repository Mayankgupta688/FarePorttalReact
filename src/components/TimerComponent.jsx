import React from "react";
import ReactDOM from "react-dom";

//import WorkingWithoutJsx from "./components/WorkingWithoutJsx";

function TimerComponent() {
    return <h1>Timer: {new Date().getSeconds()}</h1>
}

setInterval(() => {
    ReactDOM.render(<TimerComponent />, document.getElementById("root"))
}, 1000)


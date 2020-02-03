import React from "react";

export default function WorkingWithoutJsx() {
    return React.createElement("div", {},
        React.createElement("div", {}, 
            React.createElement("p", {}, 
                React.createElement("h1", {}, "Hello World..."))));
}
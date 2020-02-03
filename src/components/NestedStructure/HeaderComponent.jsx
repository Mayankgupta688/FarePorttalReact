import React from "react";

export default function HeaderComponent(props) {
    var data = "Header Random";
    props.userDetails.name = data;
    return <h1>This is Header Page... {props.userDetails.name}</h1>
}
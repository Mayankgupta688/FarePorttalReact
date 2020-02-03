import React from "react";

import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import ContentComponent from "./ContentComponent";

export default function PageComponent(props) {
    var data = "Random";
    debugger;

    props.userDetails.name = data;

    return (
        <div>
            <HeaderComponent userDetails={props.userDetails}/>
            <ContentComponent userDetails={props.userDetails} />
            <FooterComponent userDetails={props.userDetails}/>
        </div>
    )
}
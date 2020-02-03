import React from "react"

var componentStyles = {
    headerStyle: {
        color: "red", 
        backgroundColor: "grey", 
        borderBottom: "10px solid blue",
    }, divStyling: {
        color: "orange"
    }, commonStyle: {
       paddingLeft: "100px"
    }
}


var newStyle= {
    ...componentStyles.commonStyle,
    ...componentStyles.headerStyle
}
export default function InlineStyleComponent(props) {
    return (
        <div>
            <h1 style={newStyle}>Hello World...</h1>
            <div style={componentStyles.divStyling}>Welcome to the Session...</div>
        </div>
    );
}
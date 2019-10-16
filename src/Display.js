import React from "react";
import RouteCard from "./RouteCard.js";

const Display = props => {
    return (
        <div> 
            {console.log("&&props", props)}
            <RouteCard name={props.name} etas={props.etas} />     
        </div>
    )
}

export default Display;
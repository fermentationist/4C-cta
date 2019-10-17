import React from "react";

const ArrivalCard = props => {
console.log("TCL: props", props)
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.route}</h2>
            <h2>{props.dest}</h2>
            <h3>{props.eta}</h3>
        </div>
    )
}
export default ArrivalCard;
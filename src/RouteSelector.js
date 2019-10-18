import React from "react";

const RouteSelector = props => {
    const dropdownStyle = {
        display: "block", 
        appearance: "none", 
        width: "50vw",
        height: "2em",
        fontSize: "2em",
        color: "green",
        fontFamily: "futura",
        margin: "0.5em 0",
    };
    return (
        <select className="route-selector" onChange={props.onChange} style={dropdownStyle}>
            <option value={null} readOnly>• please select station •</option>
            {
                props.stations.map(station => {
                    return (
                        <option key={station} value={station}>{station}</option>
                    )
                })
            }
        </select>
    );
}

export default RouteSelector;
import React, {useState, useEffect} from "react";
import makeKey from "./uniqueKey.js";

const API_KEY = "e22345c93ad34bad94edbc2a46fa90ad";

const RouteSelector = props => {
    return (
        <div>
            <select className="route-selector" onChange={props.onChange}>
                {
                    props.stations.map(station => {
                        return (
                            <option key={station} value={station}>{station}</option>
                        )
                    })
                }
            </select>
            {/* <Display name={state.selectedRoute} etas={state.etas}/> */}
        </div>
    );
}

export default RouteSelector;
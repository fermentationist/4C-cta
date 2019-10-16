import React, {useState, useEffect} from "react";
import CTA_routes from "./cta_stations.json";
import Display from "./Display.js";

const API_KEY = "e22345c93ad34bad94edbc2a46fa90ad";

const RouteSelector = props => {
    const [state, setState] = useState({
        selectedRoute: null,
        directions: null,
        selectedDirection: null,
        etas: null
    });
    console.log(props)
    useEffect(() => {
        const id = state.stopIds
        fetch(`https://cors-anywhere.herokuapp.com/www.transitchicago.com/api/1.0/ttarrivals.aspx?key=${API_KEY}&stpid=${id}&outputType=JSON`).then((data) => data.json()).then(stuff => {
        console.log("TCL: stuff", stuff)
            const etas = stuff.ctatt.eta
            console.log("TCL: etas", etas)
            setState({
                ...state,
                etas: etas
            })
        })
    }, [state.selectedRoute])

    const stationSelectionHandler = event => {
        const selectedStop = event.currentTarget.value;
        const [stop] = CTA_routes.filter(stop => stop.STATION_NAME === selectedStop);
        console.log(stop)
        const stopIds = stop.STOPS.map(stopData => stopData.STOP_ID);
        setState({
            ...state,
            selectedRoute: selectedStop,
            stopIds: stopIds,
        })
        console.log(event.currentTarget.value)
    }

    return (
        <div>
            <select className="route-selector" onChange={stationSelectionHandler}>
                {
                    props.routes.map(route => {
                        return (
                            <option value={route.STATION_NAME}>{route.STATION_NAME}</option>
                        )
                    })
                }
            </select>
            {console.log("state.etas",state.etas)}
            <Display name={state.selectedRoute} etas={state.etas}/>
        </div>
    );
}

export default RouteSelector;
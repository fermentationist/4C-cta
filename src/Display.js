import React from "react";
import ArrivalCard from "./ArrivalCard.js";

const Display = props => {
    const routeKey = {
        Org: "Orange Line",
        G: "Green Line",
        Red: "Red Line",
        Brn: "Brown Line",
        Pink: "Pink Line",
        Blue: "Blue Line",
        P: "Purple Line",
        

    }
    return (
        <div className={props.className}>
            {props.etas.map(eta => {
                const minTilArrival = (Date.parse(eta.arrT) - Date.now()) / 60000;
                console.log("TCL: minTilArrival", minTilArrival)
                {console.log("TCL: props.etas.stpDe", props.etas.stpDe)}
                    return (
                        <React.Fragment>
                            <ArrivalCard 
                                key={eta.arrT + Date.now()}
                                name={eta.staNm} 
                                route={routeKey[eta.rt]} 
                                eta={minTilArrival} 
                                dest={eta.stpDe} />
                        </React.Fragment>
                    )
                })
            }
                 
        </div>
    )
}

export default Display;
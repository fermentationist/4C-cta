import React from "react";
import ArrivalCard from "./ArrivalCard.js";
import makeKey from "./uniqueKey.js";

const Display = props => {
console.log("TCL: Display -> props", props)
    const routeKey = {
        Org: "Orange Line",
        G: "Green Line",
        Red: "Red Line",

    }
    return (
        <div className={props.className}> 
            {props.etas.map(eta => {
                {console.log("TCL: props.etas.stpDe", props.etas.stpDe)}
                    return (
                        <React.Fragment>
                            <ArrivalCard 
                                key={eta.arrT + Date.now()}
                                name={eta.staNm} 
                                route={routeKey[eta.rt]} 
                                eta={eta.arrT} 
                                dest={eta.stpDe} />
                        </React.Fragment>
                    )
                })
            }
                 
        </div>
    )
}

export default Display;
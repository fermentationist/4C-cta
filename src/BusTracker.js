import React, {useState, useEffect} from "react";
import styled from "styled-components";
import RouteSelector from "./RouteSelector.js";
import * as routes from "./cta_stations.json";
import Display from "./Display.js";

console.log("*", routes.default) 
const API_KEY = "e22345c93ad34bad94edbc2a46fa90ad";
const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;
const BusTracker = props => {
    const [state, setState] = useState({
        routes: routes.default
    });
    console.log("state=",state)
    const StyledHeader = styled.header`
        width: 100%;
    `;
    return (
        <StyledDiv>
            <StyledHeader>
                <h1>CTA Bus Tracker</h1>
            </StyledHeader>
            <RouteSelector routes={state.routes}/>
            <Display />
        </StyledDiv>
    )
}

export default BusTracker;
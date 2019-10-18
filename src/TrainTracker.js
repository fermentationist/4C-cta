import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";
import RouteSelector from "./RouteSelector.js";
import stationData from "./cta_stations.json";
import Display from "./Display.js";


const API_KEY = "e22345c93ad34bad94edbc2a46fa90ad";
const stationNames = stationData.map(route => route.STATION_NAME)

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-items: flex-start;
`;
const StyledHeader = styled.header`
    width: 100%;
    height: 15vh;
    margin-top: 1em;
    h1 {
        font-family: futura;
        font-size: 3em;
        color: blue;
        font-weight: 400;
    }
`;
const TrainTracker = props => {
    const [state, setState] = useState({
        selectedStation: null,
        etas: []
    });
    
    const getEtas = async ids => {
            const fetchEta = async id => {
                const url = `https://cors-anywhere.herokuapp.com/www.transitchicago.com/api/1.0/ttarrivals.aspx?key=${API_KEY}&stpid=${id}&outputType=JSON`;
                const eta = await fetch(url)
                    .then((rawdata) => rawdata.json())
                    .then(data => {
                    const newEta = data.ctatt.eta
                    console.log("TCL: newEta", newEta)
                    console.log("TCL: etas", state.etas);
                    setState({
                        ...state,
                        etas: [...state.etas, ...newEta],
                    })
                });
            }
            return ids.map(async id => {
                const etas = await fetchEta(id);
                console.log("TCL: id", id);
                return etas;
            });
    }    

    const stationSelectionHandler = event => {
        // clearDisplay();
        const selected = event.currentTarget.value;
        const [station] = stationData.filter(stop => stop.STATION_NAME === selected);
        console.log("station=", station)
        const stopIds = station.STOPS.map(stopData => stopData.STOP_ID);
        getEtas(stopIds)
        setState({
            ...state,
            selectedStation: selected,
            stopIds,
        });
    }
    // useEffect(() => {
    //     return function willUnmount () {
    //         clearDisplay();
    //     }
    // }, [])

    const clearDisplay = () => {
        console.log("clearing...")
        setState({
            ...state,
            selectedStation: null,
            etas: []
        })
        // const [ref] = document.getElementsByClassName("display");
        // console.log("TCL: clearDisplay -> ref", ref.children)
        // // ref.innerHTML = "";
        // while (ref.firstChild){
        //     ref.remove(ref.firstChild)
        // }
    }
    return (
        <StyledDiv>
            <StyledHeader>
                <h1>CTA Train Arrivals</h1>
            </StyledHeader>
            <RouteSelector onChange={stationSelectionHandler} stations={stationNames}/>
            <Display etas={state.etas} className="display"/>
        </StyledDiv>
    )
}

export default TrainTracker;
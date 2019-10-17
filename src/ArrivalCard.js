import React from "react";
import styled from "styled-components";

const ArrivalCard = props => {
console.log("TCL: props", props)
    const StyledCard = styled.div`
        width: 50vw;
        display: grid;
        grid-template-columns: 2fr 1fr;
        border: 1px blue solid;
        border-radius: 23px;
        align-items: center;
        text-align: left;
        justify-content: space-between;
        margin: 0.5em;
        div.route {
            padding: 0.5em 0 0.5em 1em;
        }
        h1.eta {
            margin: 0;
            padding: 0;
            color: blue;
        }
        h1, h2, h3 {
            font-family: sans-serif;
        }
        
    `;

    return (
        <StyledCard>
            <div className="route">
                <h3>{props.name}</h3>
                <h2>{props.route}</h2>
                <h2>{props.dest}</h2>
            </div>
            <h1 className="eta">{props.eta < 1 ? "Arriving" : `${props.eta.toFixed(1)} minutes`}</h1>
        </StyledCard>
    )
}
export default ArrivalCard;
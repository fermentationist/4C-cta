import React from 'react';
import {createGlobalStyle} from "styled-components";
import BusTracker from "./BusTracker.js";
const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    outline: none;
  }
  body {
    width: 100vw;
    height: 100vh;
  }
  
`;
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <BusTracker />
    </div>
  );
}

export default App;

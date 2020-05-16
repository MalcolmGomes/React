import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './index.css'

const Main = () => {
    // React.useState is a hook to hold state
    const [isLit, setLit] = useState(false);
    const [temp, changeTemp] = useState(22)
    const brightness = isLit ? "lit" : "dark";
    return <div className={`room ${brightness}`}>
        The Room is {isLit ? 'Lit!' : 'Dark!'} <br/>            
        <button onClick={() => setLit(!isLit)}> Flip </button>
        <button onClick={() => setLit(true)}> On </button>
        <button onClick={() => setLit(false)}> Off </button>        
        <br/>
        Temperature: {temp}
        <button onClick={() => changeTemp(temp+1)}> + </button>
        <button onClick={() => changeTemp(temp-1)}> - </button>
        <br/>
        </div>    
}

const Render = () => {
  return <div>
      <Main />
  </div>
}

// Roomss component is exported with a defined path of /state
export const Room = () => {
  return <div>
      <Switch>
        <Route path="/state" component={Render} exact />
      </Switch> 
  </div>
}
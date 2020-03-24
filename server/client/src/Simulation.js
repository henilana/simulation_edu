import React from 'react';

function Simulation(props) {
    const element = props.simulationsList.map ( (simulationsList,index) =>
        <div key={index}>
            <span>{simulationsList.time}</span>
            <span>{simulationsList.participants}</span>
            <span>{simulationsList.name}</span><br/>
            <span>{simulationsList.desc}</span>
        </div>)  
    return (
        <div>
            {element}   
        </div>
    );
}

export default Simulation;
import React from 'react';
import "./Simulation.css";

function Simulation(props) {
    const element = props.simulationsList.map ( (simulationsList,index) =>
        <div key={index} >
            
            <br/>
            <div className='SimulationExtrnal'>
                <span className="circle circleTime">{simulationsList.time} זמן</span>
                <span className="circle circleParticipants">{simulationsList.participants} שחקנים</span>
                <div className='Simulation'>
                    <span className="SumulationName">{simulationsList.name}</span><br/>
                    <span>{simulationsList.desc}</span>
                    
                </div>
                <div  className='SimulationButton'>
                    <span >פירוט</span>
                </div>
                <div  className='SimulationButton2'>
                    <span >בחר</span>
                </div>                
            </div>
        </div>)  
    return (
        <div>
            {element} 
        </div>
    );
}

export default Simulation;
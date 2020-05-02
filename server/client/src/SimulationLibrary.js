import React, { Component } from 'react';
import Simulation from './Simulation';
import "./SimulationLibrary.css";

class SimulationLibrary extends Component {

    state={selectedSimulationIndex:0};

    setsimulationIndex = (index) =>{
        this.setState({selectedSimulationIndex:index});
    };

    render() {
        const element = this.props.simulationsList.map ( (simulationsList,index) =>(
            <div key={index} >
                <Simulation simulationsList = {simulationsList} setsimulationIndex = {this.setsimulationIndex} 
                    selectedIndex = {index} divClassName = {''} 
                    button1Link ={'/Simulation/'} button2Link ={'/Simulation/'}
                    button1Name ={'פירוט'} button2Name = {'בחר'}/>
            </div> ))        
        return (
        
            <div className='SimulationLibrary'>
                <p> הקמת סימולציה </p> 
                {element}
            </div>
          
        );
    }
}

export default SimulationLibrary;
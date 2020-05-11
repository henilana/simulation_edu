import React, { Component } from 'react';
import Simulation from './Simulation';
import "./SimulationLibrary.css";

class SimulationLibrary extends Component {

    render() {
        const element = this.props.simulationsList.map ( (simulationsItem,index) =>(
            <div key={index} >
                <Simulation 
                    simulation = {simulationsItem} 
                    SimulationClassName={'Simulation'}
                    descriptionClassName={'text-truncate'}
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
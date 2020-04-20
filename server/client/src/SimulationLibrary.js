import React, { Component } from 'react';
import Simulation from './Simulation';
import "./SimulationLibrary.css";

class SimulationLibrary extends Component {

    state={selectedSimulationIndex:0};

    setsimulationIndex = (index) =>{
        this.setState({selectedSimulationIndex:index});
    };

    constructor(props) {
        super(props);
    };
    componentWillUnmount() {
        this.props.setsimulationNum(this.state.selectedSimulationIndex);
    };
    
    render() {
        const element = this.props.simulationsList.map ( (simulationsList,index) =>(
            <div key={index} >
                <Simulation simulationsList = {simulationsList} setsimulationIndex = {this.setsimulationIndex} selectedIndex = {index} scereenName={'Library'}/>
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
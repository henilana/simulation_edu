import React, { Component } from 'react';
import Simulation from './Simulation';
import "./SimulationLibrary.css";

class SimulationLibrary extends Component {

    state={selectedSimulationID:0};

    setsimulationID = (selectedSimulationID) =>{
        this.setState({selectedSimulationID:selectedSimulationID});
    };

    constructor(props) {
        super(props);
    };
    componentWillUnmount() {
        this.props.setsimulationNum(this.state.selectedSimulationID);
    };
    
    render() {
        return (
        
            <div className='SimulationLibrary'>
                <p> הקמת סימולציה </p> 
                <Simulation simulationsList = {this.props.simulationsList} setsimulationID = {this.setsimulationID} scereenName={'Library'}/>
            </div>
          
        );
    }
}

export default SimulationLibrary;
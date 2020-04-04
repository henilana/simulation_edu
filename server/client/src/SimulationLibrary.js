import React, { Component } from 'react';
import Simulation from './Simulation';
import "./SimulationLibrary.css";

class SimulationLibrary extends Component {

    state={windowWidth:'',simulationID:0};

    setsimulationID = (simulationID) =>{
        this.setState({simulationID:simulationID});
    };

    constructor(props) {
        super(props);
        console.log(this.props,'props');
    };
    componentWillUnmount() {
        this.props.setsimulationNum(this.state.simulationID);
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
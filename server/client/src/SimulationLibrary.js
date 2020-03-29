import React, { Component } from 'react';
import Simulation from './Simulation';
import "./SimulationLibrary.css";

class SimulationLibrary extends Component {

    state={windowWidth:''};

    constructor(props) {

        super(props);
        console.log(this.props,'props');

      }
 
  
      render() {
        return (
        
            <div className='SimulationLibrary'>
                <p> Duis nisi exercitation et commodo reprehenderit minim irure pariatur exercitation anim laboris do ut ea. </p> 
                  

                <Simulation simulationsList = {this.props.simulationsList} />
            </div>
          
        );
    }
}

export default SimulationLibrary;
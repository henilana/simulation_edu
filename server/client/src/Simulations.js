import React, { Component } from 'react';
import Simulation from './Simulation'

class Simulations extends Component {

    state={windowWidth:''};

    constructor(props) {

        super(props);
        console.log(this.props,'props');

      }
 
  
      render() {
        return (
        
            <div>
                <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p> 
                <Simulation simulationsList = {this.props.simulationsList} />
            </div>
          
        );
    }
}

export default Simulations;
import React, { Component } from 'react';
import "./Simulation.css";
import Button from './Button';

class Simulation extends Component {   
    constructor(props) {
        super(props);
    };

    render() {    
        const RedirectToSimulationDetails = this.props.button1Link + this.props.selectedIndex ;         
        return (
            <div className={this.props.divClassName}>
               <br/>
                <div className='SimulationExtrnal'> 
                    <span className="circle circleTime">{this.props.simulation.Time} זמן</span>
                    <span className="circle circleParticipants">{this.props.simulation.Participants} שחקנים</span>
                <div className={this.props.SimulationClassName} > 
                        <span className="SimulationName">{this.props.simulation.Name}</span><br/>
                        <span>{this.props.simulation.Desc}</span>
                        
                    </div>
                        <div  className='SimulationButton'>
                        <Button link = {RedirectToSimulationDetails} ButtonName = {this.props.button1Name} /> 
                    </div>
                    <div  className='SimulationButton2'>
                        <Button link = {this.props.button2Link} ButtonName = {this.props.button2Name} /> 
                    </div>                
                </div>               
            </div>
        );
    }
}

export default Simulation;
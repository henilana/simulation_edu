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
                    <span className="circle circleTime">{this.props.simulationsList.Time} זמן</span>
                    <span className="circle circleParticipants">{this.props.simulationsList.Participants} שחקנים</span>
                    <div className='Simulation' style={{height: this.props.divClassName ==='SimulationLibrary' ? '88vh' : ''}}> 
                        <span className="SumulationName">{this.props.simulationsList.Name}</span><br/>
                        <span>{this.props.simulationsList.Desc}</span>
                        
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
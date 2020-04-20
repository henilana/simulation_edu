import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import "./Simulation.css";

class Simulation extends Component {    
    state={RedirectToSimulationDetails:false,divClassName:'',RedirectToSimulationsList:false};
    constructor(props) {
        super(props);
    };
    goToSimulationDetails = (index) =>{
        this.props.setsimulationIndex(index);
        this.setState({RedirectToSimulationDetails:true});
    } ; 
    goToSimulationsList = () =>{
        this.setState({RedirectToSimulationsList:true});
    } ;     
    componentWillMount() {
        if(this.props.scereenName ==='Details'){
            this.setState({divClassName:'SimulationLibrary'});
        } 
        else{
            this.setState({divClassName:''});
        }        
    };         
    render() {    
        if(this.state.RedirectToSimulationDetails){
            return <Redirect to = '/Simulation' />
        } 
        if(this.state.RedirectToSimulationsList){
            return <Redirect to = '/SimulationLibrary' />
        }               
        return (
            <div className={this.state.divClassName}>
               {/* {element} */}
               <br/>
                <div className='SimulationExtrnal'>
                    <span className="circle circleTime">{this.props.simulationsList.Time} זמן</span>
                    <span className="circle circleParticipants">{this.props.simulationsList.Participants} שחקנים</span>
                    <div className='Simulation' style={{height: this.props.scereenName ==='Details' ? '88vh' : ''}}> 
                        <span className="SumulationName">{this.props.simulationsList.Name}</span><br/>
                        <span>{this.props.simulationsList.Desc}</span>
                        
                    </div>
                    <div  className='SimulationButton'>
                        {this.props.scereenName ==='Library' ? 
                            <span onClick ={() => this.goToSimulationDetails(this.props.selectedIndex)}>פירוט</span> : 
                            <span >בחירה</span>}
                    </div>
                    <div  className='SimulationButton2'>
                        {this.props.scereenName ==='Library' ? 
                            <span >בחר</span> :
                            <span onClick ={this.goToSimulationsList}>חזרה</span>}
                    </div>                
                </div>               
            </div>
        );
    }
}

export default Simulation;
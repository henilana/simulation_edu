import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import "./Simulation.css";

class Simulation extends Component {    
    state={RedirectToSimulationDetails:false,divClassName:'',RedirectToSimulationsList:false};
    constructor(props) {
        super(props);
    };
    goToSimulationDetails = (ID) =>{
        this.props.setsimulationID(ID);
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
        const element = this.props.simulationsList.map ( (simulationsList,index) =>(
            this.props.scereenName ==='Library' || (this.props.simulationID === simulationsList.ID && this.props.scereenName ==='Details') ?
            
            <div key={index} >
                <br/>
                <div className='SimulationExtrnal'>
                    <span className="circle circleTime">{simulationsList.time} זמן</span>
                    <span className="circle circleParticipants">{simulationsList.participants} שחקנים</span>
                    <div className='Simulation' style={{height: this.props.scereenName ==='Details' ? '88vh' : ''}}> 
                        <span className="SumulationName">{simulationsList.name}</span><br/>
                        <span>{simulationsList.desc}</span>
                        
                    </div>
                    <div  className='SimulationButton'>
                        {this.props.scereenName ==='Library' ? 
                            <span onClick ={() => this.goToSimulationDetails(simulationsList.ID)}>פירוט</span> : 
                            <span >בחירה</span>}
                    </div>
                    <div  className='SimulationButton2'>
                        {this.props.scereenName ==='Library' ? 
                            <span >בחר</span> :
                            <span onClick ={this.goToSimulationsList}>חזרה</span>}
                    </div>                
                </div>
            </div> : ''))

        if(this.state.RedirectToSimulationDetails){
            return <Redirect to = '/Simulation' />
        } 
        if(this.state.RedirectToSimulationsList){
            return <Redirect to = '/SimulationLibrary' />
        }               
        return (
            <div className={this.state.divClassName}>
               {element}
            </div>
        );
    }
}

export default Simulation;
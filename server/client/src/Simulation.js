import React, { Component } from 'react';
import "./Simulation.css";
import MyButton from './components/MyButton';
import Container from 'react-bootstrap/Container'

class Simulation extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        const RedirectToSimulationDetails = this.props.button1Link + this.props.selectedIndex;
        return (
            <div className={this.props.divClassName}>
                <br />
                <div className='SimulationExtrnal'>
                    <span className="circle circleTime">{this.props.simulation.Time} זמן</span>
                    <span className="circle circleParticipants">{this.props.simulation.Participants} שחקנים</span>
                    <div className={this.props.SimulationClassName} >
                        <span className="SimulationName">{this.props.simulation.Name}</span><br />
                        <span>{this.props.simulation.Desc}</span>

                    </div>
                    <Container fluid className="d-flex justify-content-end position-relative SimulationButtonContainer">
                        <MyButton link={RedirectToSimulationDetails} ButtonName={this.props.button1Name} />
                        <p style={{width: '1em'}}></p>
                        <MyButton link={this.props.button2Link} ButtonName={this.props.button2Name} />
                    </Container>
                </div>
            </div>
        );
    }
}

export default Simulation;
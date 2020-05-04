import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image';
import "./PassiveManagerAndParticipatorSimulation.css";


class PassiveParticipatorSimulation extends Component {

  render() {

    // Temporary values
    let IconImg = 'https://cdn.pixabay.com/photo/2016/03/09/15/10/man-1246508__340.jpg',
      SimulationName = 'Simulation Name',
      PersonName = 'משה',
      PersonRole = 'צופה';

    return (
      <div className='PassiveParticipatorSimulation'>
        <Card className='card'>
          <Card.Body>
            <div className='header'>
              <div className='Timer' id="TimerDiv1">
                <Image className='timer' src='https://cdn.pixabay.com/photo/2012/04/13/13/19/clock-32380__340.png' />
              </div>
              <Card.Title className='CardTitle'>{SimulationName}</Card.Title>
              <Image className='IconImageTop' src={IconImg} roundedCircle />
            </div>
            <div className='divOfImageCenter'>
              <Image className='IconImageCenter' src={IconImg} roundedCircle />
              <Card.Text className='CardText'> {PersonName + ' - ' + PersonRole}</Card.Text>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default PassiveParticipatorSimulation;
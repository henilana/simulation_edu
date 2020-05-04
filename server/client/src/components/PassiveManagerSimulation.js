import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image';
import { Redirect } from 'react-router-dom';
import axios from "axios";
import "./PassiveManagerAndParticipatorSimulation.css";

class PassiveManagerSimulation extends Component {

  state = { navigateToCreateOrJoinSimulation: false }

  render() {
    if (this.state.navigateToCreateOrJoinSimulation) { return <Redirect to='./CreateOrJoinSimulation' /> }

    // Temporary values
    let IconImg = 'https://cdn.pixabay.com/photo/2016/03/09/15/10/man-1246508__340.jpg',
      SimulationName = 'Simulation Name',
      PersonName = 'משה',
      GroupId = '55482',
      PersonRole = 'מנהל';

    return (
      <div className='PassiveManagerSimulation'>
        <Card className='card'>
          <Card.Body>
            <div className='header'>
              <div className='divGroupId'><span className='GroupId'>{GroupId}</span></div>
              <Card.Title className='CardTitle'>{SimulationName}</Card.Title>
              <Image className='IconImageTop' src={IconImg} roundedCircle />
              <div className='BottomOfHeader'>
                <div className='Timer' id="TimerDiv">
                  <Image className='timer' src='https://cdn.pixabay.com/photo/2012/04/13/13/19/clock-32380__340.png' />
                </div>
                <Button className='ButtonTop' onClick={() => {
                  this.setState({ navigateToCreateOrJoinSimulation: true })
                  axios.post(`GroupID/${GroupId}`, {
                    SimulationOver: true
                  })
                    .then(res => { console.log(res); })
                    .catch(function (error) { console.log(error); })
                }} variant="dark">סיים סימולציה </Button>
                <div className='emptyDiv'></div>
              </div>
            </div>
            <div className='divOfImageCenter'>
              <Image className='IconImageCenter' src={IconImg} roundedCircle />
              <Card.Text className='CardText'>{PersonName + ' - ' + PersonRole}</Card.Text>
            </div>
            <div className='Bottom'>
              <Button className='leftButton' onClick={() => {
                axios.post(`GroupID/${GroupId}`, {
                  GoBack: true
                })
                  .then(res => { console.log(res); })
                  .catch(function (error) { console.log(error); })
              }} variant="dark">חזור תור</Button>
              <Button className='rightButton' onClick={() => {
                axios.post(`GroupID/${GroupId}`, {
                  Next: true
                })
                  .then(res => { console.log(res); })
                  .catch(function (error) { console.log(error); })
              }} variant="dark">העבר תור</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default PassiveManagerSimulation;
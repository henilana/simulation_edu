import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Image from 'react-bootstrap/Image';
import { Redirect } from 'react-router-dom';
import axios from "axios";
import "./Timer.css";
import"./ManagerPassiveSimulation.css";

class ManagerPassiveSimulation extends Component {

    state = { navigateToCreateOrJoinSimulation:false }

    // All the code in componentDidMount is just a timer logic
    componentDidMount() {        
        const FULL_DASH_ARRAY = 283;
        const WARNING_THRESHOLD = 10;
        const ALERT_THRESHOLD = 5;
        let  TIMEOfTimer=720

        const COLOR_CODES = {
          info: {
            color: "green"
          },
          warning: {
            color: "orange",
            threshold: WARNING_THRESHOLD
          },
          alert: {
            color: "red",
            threshold: ALERT_THRESHOLD
          }
        };
        
        const TIME_LIMIT = TIMEOfTimer;
        let timePassed = 0;
        let timeLeft = TIME_LIMIT;
        let timerInterval = null;
        let remainingPathColor = COLOR_CODES.info.color;
        
        document.getElementById("TimerDiv").innerHTML = `
        <div class="base-timer">
          <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g class="base-timer__circle">
              <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
              <path
                id="base-timer-path-remaining"
                stroke-dasharray="283"
                class="base-timer__path-remaining ${remainingPathColor}"
                d="
                  M 50, 50
                  m -45, 0
                  a 45,45 0 1,0 90,0
                  a 45,45 0 1,0 -90,0
                "
              ></path>
            </g>
          </svg>
          <span id="base-timer-label" class="base-timer__label">${formatTime(
            timeLeft
          )}</span>
        </div>
        `;
        
        startTimer();
        
        function onTimesUp() {
          clearInterval(timerInterval);
        }
        
        function startTimer() {
          timerInterval = setInterval(() => {
            timePassed = timePassed += 1;
            timeLeft = TIME_LIMIT - timePassed;
            document.getElementById("base-timer-label").innerHTML = formatTime(
              timeLeft
            );
            setCircleDasharray();
            setRemainingPathColor(timeLeft);
        
            if (timeLeft === 0) {
              onTimesUp();
            }
          }, 1000);
        }
        
        function formatTime(time) {
          const minutes = Math.floor(time / 60);
          let seconds = time % 60;
        
          if (seconds < 10) {
            seconds = `0${seconds}`;
          }
        
          return `${minutes}:${seconds}`;
        }
        
        function setRemainingPathColor(timeLeft) {
          const { alert, warning, info } = COLOR_CODES;
          if (timeLeft <= alert.threshold) {
            document
              .getElementById("base-timer-path-remaining")
              .classList.remove(warning.color);
            document
              .getElementById("base-timer-path-remaining")
              .classList.add(alert.color);
          } else if (timeLeft <= warning.threshold) {
            document
              .getElementById("base-timer-path-remaining")
              .classList.remove(info.color);
            document
              .getElementById("base-timer-path-remaining")
              .classList.add(warning.color);
          }
        }
        
        function calculateTimeFraction() {
          const rawTimeFraction = timeLeft / TIME_LIMIT;
          return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
        }
        
        function setCircleDasharray() {
          const circleDasharray = `${(
            calculateTimeFraction() * FULL_DASH_ARRAY
          ).toFixed(0)} 283`;
          document
            .getElementById("base-timer-path-remaining")
            .setAttribute("stroke-dasharray", circleDasharray);
          }
        }

    render() {
              if ( this.state.navigateToCreateOrJoinSimulation ){ return <Redirect to = './CreateOrJoinSimulation'/> } 

        // Temporary values
        let IconImg = 'https://cdn.pixabay.com/photo/2016/03/09/15/10/man-1246508__340.jpg',
        SimulationName = 'Simulation Name',
        PersonName = 'משה',
        GrupId = '55482',
        PersonRole = 'מנהל';

        return (
          <div>
                <Card className = 'card'>
                <Card.Body>
                    <div className = 'header'>
                    <span className = 'GrupId'>{ GrupId }</span> 
                <Card.Title className = 'CardTitle'>{ SimulationName }</Card.Title>  
                <Image className = 'IconImageTop' src = { IconImg } roundedCircle/>
                    <div className = 'BottomOfHeader'>
                    <div className = 'Timer' id = "TimerDiv"></div>
                <Button className = 'ButtonTop' onClick = {()=> { this.setState({ navigateToCreateOrJoinSimulation:true })
                     axios.post(`GroupID/${GrupId}` , {
                      SimulationOver: true })
                    .then(res => { console.log(res); })
                    .catch(function (error) { console.log(error); })
                     }} variant = "dark">סיים סימולציה </Button>
                    <div className = 'emptyDiv'></div>
                    </div>
                    </div>
                    <div className = 'divOfImageCenter'>
                <Image className = 'IconImageCenter' src = { IconImg } roundedCircle />
                <Card.Text className = 'CardText'>{ PersonName + ' - ' + PersonRole }</Card.Text>
                    </div>
                    <div className = 'Bottom'>
                <Button className = 'leftButton' onClick = {()=>{
                           axios.post(`GroupID/${GrupId}` , {
                                  GoBack: true })
                    .then(res =>  { console.log(res); })
                    .catch(function (error) { console.log(error); })
                     }} variant = "dark">חזור תור</Button>
                <Button className = 'rightButton' onClick = {()=>{
                           axios.post(`GroupID/${GrupId}`, {
                                  Next: true })
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

export default ManagerPassiveSimulation;
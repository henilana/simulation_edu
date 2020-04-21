import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image';
import "./Timer.css";
import"./PassiveParticipator.css";

class PassiveParticipator extends Component {

    // All the code in componentDidMount is just a timer logic
    componentDidMount(){
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
        
        document.getElementById("TimerDiv1").innerHTML = `
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

        // Temporary values
        let IconImg = 'https://cdn.pixabay.com/photo/2016/03/09/15/10/man-1246508__340.jpg',
        SimulationName = 'Simulation Name',
        PersonName = 'משה',
        PersonRole = 'צופה';

        return (
            <div>
                <Card className = 'card'>
                <Card.Body>
                    <div className = 'header'>
                    <div className = 'Timer' id= "TimerDiv1"></div>
                <Card.Title className = 'CardTitle'>{ SimulationName }</Card.Title>  
                <Image className = 'IconImageTop'src={ IconImg } roundedCircle />
                    </div>
                    <div className = 'divOfImageCenter'>
                <Image className = 'IconImageCenter' src= { IconImg } roundedCircle />
                <Card.Text className = 'CardText'> { PersonName + ' - ' + PersonRole }</Card.Text>
                    </div>
                </Card.Body>
                </Card>
            </div>
        );
    }
}

export default PassiveParticipator;
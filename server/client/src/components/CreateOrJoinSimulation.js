import React, { Component } from "react";
import  { Redirect } from 'react-router-dom'

import "./CreateOrJoinSimulation.css";
export class CreateOrJoinSimulation extends Component {
  state={goTo:""}
    newSimulation = () =>{
        console.log("newSimulation is clicked");
        this.setState({ goTo: "SimulationLibrary" });
    }
    joinSimulation = () =>{
        console.log("joinSimulation is clicked");
        this.setState({ goTo: "JoinTheSimulation" });

        
    }
  render() {
    return (
      <div className="CreateOrJoinSimulation">
      {this.state.goTo?<Redirect to={`/${this.state.goTo}`}  />:""}
        <h1>כניסה לסימולציה</h1> <p> מנהל? צור סימולציה חדשה</p>{" "}
        <p>משתתף? הצטרף לסימולציה קיימת</p>{" "}
        <button onClick={this.newSimulation} className="btn-style">יצירת סימולציה חדשה</button>
        <br />
        <button onClick={this.joinSimulation} className="btn-style">הצטרפות לסימולציה קיימת</button>
      </div>
    );
  }
}

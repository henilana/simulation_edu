import React, { Component } from "react";
import  { Redirect } from 'react-router-dom';
import MainButton from "./MainButton";
import MainHeader from "./MainHeader";
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
        <MainHeader text="כניסה לסימולציה"/>
         <p> מנהל? צור סימולציה חדשה</p>{" "}
        <p>משתתף? הצטרף לסימולציה קיימת</p>{" "}
        <MainButton text="יצירת סימולציה חדשה" fun={this.newSimulation} />
        <br />
        <MainButton text="הצטרפות לסימולציה קיימת" fun={this.joinSimulation} />
        
      </div>
    );
  }
}

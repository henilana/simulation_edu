import React, { Component } from "react";
import "./CreateOrJoinSimulation.css";
export class CreateOrJoinSimulation extends Component {
    newSimulation = () =>{
        console.log("newSimulation is clicked");
        
    }
    joinSimulation = () =>{
        console.log("joinSimulation is clicked");
        
    }
  render() {
    return (
      <div className="CreateOrJoinSimulation">
        <h1>כניסה לסימולציה</h1> <p> מנהל? צור סימולציה חדשה</p>{" "}
        <p>משתתף? הצטרף לסימולציה קיימת</p>{" "}
        <button onClick={this.newSimulation} className="btn-style">יצירת סימולציה חדשה</button>
        <br />
        <button onClick={this.joinSimulation} className="btn-style">הצטרפות לסימולציה קיימת</button>
      </div>
    );
  }
}

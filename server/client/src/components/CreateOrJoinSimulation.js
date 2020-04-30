import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import MainButton from "./MainButton";
import HeaderText from "./HeaderText";

export class CreateOrJoinSimulation extends Component {
  state = { goTo: "" };
  newSimulation = () => {
    console.log("newSimulation is clicked");
    this.setState({ goTo: "SimulationLibrary" });
  };
  joinSimulation = () => {
    console.log("joinSimulation is clicked");
    this.setState({ goTo: "JoinTheSimulation" });
  };
  render() {
    return (
      <div className="CreateOrJoinSimulation">
        {this.state.goTo ? <Redirect to={`/${this.state.goTo}`} /> : ""}
        <HeaderText text="כניסה לסימולציה" />
        <p style={{ fontWeight: 300, color: "rgb(156, 156, 156)" }}>
          {" "}
          מנהל? צור סימולציה חדשה
        </p>{" "}
        <p>משתתף? הצטרף לסימולציה קיימת</p>{" "}
        <div style={{ marginBottom: "2vw" }}>
          <MainButton text="יצירת סימולציה חדשה" fun={this.newSimulation} />
        </div>
        <br />
        <MainButton text="הצטרפות לסימולציה קיימת" fun={this.joinSimulation} />
      </div>
    );
  }
}

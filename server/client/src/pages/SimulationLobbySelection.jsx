import React, { Component } from "react";
import Players from "./Players.jsx";
class SimulationLobbyMember extends Component {
//  constructor(props) {
//     super(props);
//   }
  render() {
   
    return (
      <div>
        <Players userName={this.props.userName} UUID={1234}/>
      </div>
    );
  }
}

export default SimulationLobbyMember;

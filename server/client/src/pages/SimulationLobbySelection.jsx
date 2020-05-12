import React, { Component } from "react";
import Players from "./Players.jsx";
import Header from "./Header.jsx";
class SimulationLobbyMember extends Component {
  //  constructor(props) {
  //     super(props);
  //   }
  render() {
    return (
      <div>
        <Header
          showUUID={true}
          title="בחירת תפקיד"
          desc="בחר את התפקיד שברצונך לשחק תפקיד שמופיע שם לידו אינו ניתנת לבחירה"
          buttonDesc=""
          showDescOrButton={true}
          showClockNearTitle={false}
          showClockNearDesc={false}
        />
        <Players userName={this.props.userName} UUID={1234} />
      </div>
    );
  }
}

export default SimulationLobbyMember;

import React, { Component } from "react";
import "./Players.css";

class Players extends Component {
  url = "/chooserole";
  userName = "";

  state = {
    // Temporary simulation:
    simulation: [
      { uuid: "1234", role: "student 1", playerName: "" },
      { uuid: "1234", role: "student 2", playerName: "Michal" },
      { uuid: "1234", role: "student 3", playerName: "" },
      { uuid: "1234", role: "teacher 1", playerName: "Noa" },
      { uuid: "1234", role: "teacher 2", playerName: "" },
    ],
    currentSelectionIndex: -1,
    previousSelectionIndex: -1,
    serverStatus: 200,
  };

  constructor(props) {
    super(props);
    this.userName = props.userName;
  }

  componentWillMount() {
    this.getUpdatedSimulation();
  }
  getUpdatedSimulation = () => {
    /*
    this.setState({ serverStatus: 200 });
  axios
      .post(this.url, {
         uuid:this.props.uuid,
         user: this.props.user,
         role:currentSelectionIndex
      })
      .then(res => {
         if (res.status === 200) {
          this.setState({ previousSelectionIndex: this.state.currentSelectionIndex ,serverStatus:200});
        }
        if (res.status === 404) {
           this.setState({ serverStatus:404});
           this.setState({ currentSelectionIndex: this.state.previousSelectionIndex}
        }
         else {//set error msg according error number
          //this.setState({msg:'error'})
        }
      })
      .catch(err => {
       //??
      });*/
  };
  handleOptionChange = (changeEvent) => {
    let tmpSimulation = [...this.state.simulation];
    let objIndex = tmpSimulation.findIndex(
      (obj) => obj.role === changeEvent.target.value
    );

    tmpSimulation[objIndex].playerName = this.userName;
    if (this.state.currentSelectionIndex > -1) {
      tmpSimulation[this.state.currentSelectionIndex].playerName = "";
    }

    this.setState({
      previousSelectionIndex: this.state.currentSelectionIndex,
      currentSelectionIndex: objIndex,
      simulation: tmpSimulation,
    });
  };
  render() {
    return (
      <div dir="rtl" className="playersPadding" style={{ textAlign: "right" }}>
        {this.state.simulation.map((item, i) => (
          <div className="radio" key={item.role}>
            {/* <Player uuid={item.uuid} role={item.role} playerName={item.playerName}/> */}
            <label>
              <input
                type="radio"
                value={item.role}
                key={item.role}
                checked={
                  this.state.currentSelectionIndex === item.role ||
                  item.playerName
                }
                onChange={this.handleOptionChange}
                disabled={
                  item.playerName && item.playerName !== this.props.userName
                }
              />
              {item.playerName ? <span>{item.playerName} - </span> : ""}
              <span>{item.role}</span>
            </label>
          </div>
        ))}
      </div>
    );
  }
}

export default Players;

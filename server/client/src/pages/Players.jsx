import React, { Component } from "react";
import "./Players.css";
import axios from "axios";
// TO DO :
// 1.handle RTL-LTR
// 2.handle error message
// 3.handle user authentication and user name
// https://github.com/garageil/simulation_edu
// https://trello.com/b/AKkIV8Vr/edusim-lodigital

class Players extends Component {
  url = "/chooserole";

  state = {
    // Temporary simulation:
    simulation: [],
    currentSelectionID: "",
    previousSelectionID: "",
    serverStatus: 200,
  };

  // constructor(props) {
  //   super(props);
  //  }

  componentWillMount() {
    this.getUpdatedSimulation();
  }
  getUpdatedSimulation() {
    axios
      .get("/chooserole/get?UUID=" + this.props.UUID)
      .then((res) => {
        if (res.status === 200) {
          this.setState({ simulation: res.data });
          //prevent slecetd twice after refreshing
          this.setState({currentSelectionID:res.data.find(x => x.playerName === this.props.userName)._id});
        } else {
          console.log("error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  updateSimulation = (_id, playerName) => {
    axios
      .put("chooserole/update", {
        UUID: this.props.UUID,
        _id: _id, //this.state.simulation[i].role,
        playerName: playerName,
      })
      .then((res) => {
        if (res.status === 200) {
          this.getUpdatedSimulation();
        } else {
          this.getUpdatedSimulation();
          console.log(res.status);
        }
      })
      .catch((err) => {
        console.log(err);
        this.getUpdatedSimulation();
      });
  };

  handleOptionChange = (_id) => (changeEvent) => {
    // reset previous choise
    if (this.state.currentSelectionID !== "") {
      this.updateSimulation(this.state.currentSelectionID, "");
    }
    this.setState({
      previousSelectionID: this.state.currentSelectionID,
      currentSelectionID: _id,
    });
    this.updateSimulation(_id, this.props.userName);
  };
  render() {
    return (
      <div dir="rtl" className="playersPadding" style={{ textAlign: "right" }}>
        {this.state.simulation.map((item, i) => (
          <div className="radio" key={item._id}>
            {/* <Player uuid={item.uuid} role={item.role} playerName={item.playerName}/> */}
            <label>
              <input
                type="radio"
                value={item.role}
                id={item._id}
                checked={
                  this.state.currentSelectionID === item._id || item.playerName
                }
                onChange={this.handleOptionChange(item._id)}
                disabled={
                  item.playerName && item.playerName !== this.props.userName
                }
              />
              <span> </span>
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

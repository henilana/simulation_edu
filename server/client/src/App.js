import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login, Registration, Logout, CreateOrJoinSimulation, JoinTheSimulation, JoiningError, SimulationLobby, PassiveParticipator, ActiveParticipator, ManagerStartSimulation, ManagerSimulationInAction } from './components/components'
import SimulationLibrary from './SimulationLibrary';
import Simulation from './Simulation';


class App extends Component {
  url = "/api";
  state = { simulationID:0};

  setsimulationNum = simulationID =>{
    this.setState({simulationID:simulationID});
  };

  simulationsList = [{ID:1,Name:'aaaaa',
    Desc:' Duis nisi exercitation et commodo reprehenderit minim irure pariatur exercitation anim laboris do ut ea. Est sit est voluptate sunt fugiat ut incididunt et minim anim aliquip veniam laboris.Ex laborum enim sit pariatur velit esse et ea in do duis consequat excepteur. Duis adipisicing anim duis laboris est do dolore veniam ad duis consectetur dolor laborum. Aute magna Lorem adipisicing culpa fugiat ullamco quis proident proident ullamco id ea non cupidatat. Sunt deserunt aliqua quis ex proident nulla excepteur tempor sit. Enim voluptate id sit consequat nostrud officia.  ',Time:'1:30',Participants:10},
    {ID:2,Name:'bbbbbb',
    Desc:' Duis nisi exercitation et commodo reprehenderit minim irure pariatur exercitation anim laboris do ut ea. Est sit est voluptate sunt fugiat ut incididunt et minim anim aliquip veniam laboris.Ex laborum enim sit pariatur velit esse et ea in do duis consequat excepteur. Duis adipisicing anim duis laboris est do dolore veniam ad duis consectetur dolor laborum. Aute magna Lorem adipisicing culpa fugiat ullamco quis proident proident ullamco id ea non cupidatat. Sunt deserunt aliqua quis ex proident nulla excepteur tempor sit. Enim voluptate id sit consequat nostrud officia.  ',Time:'2:00',Participants:4},
    {ID:3,Name:'cccccc',
    Desc:' Duis nisi exercitation et commodo reprehenderit minim irure pariatur exercitation anim laboris do ut ea.  Est sit est voluptate sunt fugiat ut incididunt et minim anim aliquip veniam laboris.Ex laborum enim sit pariatur velit esse et ea in do duis consequat excepteur. Duis adipisicing anim duis laboris est do dolore veniam ad duis consectetur dolor laborum. Aute magna Lorem adipisicing culpa fugiat ullamco quis proident proident ullamco id ea non cupidatat. Sunt deserunt aliqua quis ex proident nulla excepteur tempor sit. Enim voluptate id sit consequat nostrud officia. ',Time:'3:30',Participants:3}] ;

  clickHandler = () => {
    console.log("clicked");
    axios
      .get(this.url)
      .then(res => {
        console.log(res.data.res);
        this.setState({ data: res.data.res });
      })
      .catch(err => console.log(err));
    // fetch(this.url)
    //   .then(res => res.json())
    //   .then(data => this.setState({data : data.res}))
    //   .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
      
        <p><b>EDUSIM</b> Get Started ! ! !</p>
        <button onClick={this.clickHandler}>Access express server !!!!!</button>
        <p>Got : {this.state.data}</p> 
         
        <BrowserRouter>
        <Switch>
          <Route exact path='/Login' component={Login} />
          <Route exact path='/Registration' component={Registration} />
          <Route exact path='/Logout' component={Logout} />
          <Route exact path='/CreateOrJoinSimulation' component={CreateOrJoinSimulation} />
          <Route exact path='/JoinTheSimulation' component={JoinTheSimulation} />
          <Route exact path='/JoiningError' component={JoiningError} />
          <Route exact path='/SimulationLibrary' render = {() => <SimulationLibrary simulationsList = {this.simulationsList} setsimulationNum = {this.setsimulationNum}/> }/>         
          <Route exact path='/Simulation' render={() => <Simulation simulationsList = {this.simulationsList} simulationID = {this.state.simulationID} scereenName={'Details'}/>} /> 
          <Route exact path='/SimulationLobby' component={SimulationLobby} />
          <Route exact path='/PassiveParticipator' component={PassiveParticipator} />
          <Route exact path='/ActiveParticipator' component={ActiveParticipator} />
          <Route exact path='/ManagerStartSimulation' component={ManagerStartSimulation} />
          <Route exact path='/ManagerSimulationInAction' component={ManagerSimulationInAction} />          
          {/* <Route  component={NotFound}/> */}
        </Switch>        
      </BrowserRouter>
      </div>

    );
  }
}

export default App;

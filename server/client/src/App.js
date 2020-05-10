import React, { Component } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login, Registration, Logout, JoinTheSimulation, JoiningError, SimulationLobby, ActiveParticipator, ManagerStartSimulation, ManagerSimulationInAction } from './components/components'
import { CreateOrJoinSimulation } from "./components/CreateOrJoinSimulation";
import SimulationLibrary from './SimulationLibrary';
import Simulation from './Simulation';
import PassiveManagerSimulation from './components/PassiveManagerSimulation'
import PassiveParticipatorSimulation from './components/PassiveParticipatorSimulation'

class App extends Component {
  url = "/api";
  state = {data:''};
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
      .then((res) => {
        console.log(res.data.res);
        this.setState({ data: res.data.res });
      })
      .catch((err) => console.log(err));
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
          <Route exact path='/SimulationLibrary' component = {() => <SimulationLibrary simulationsList = {this.simulationsList} /> }/>         
          <Route path='/Simulation/:id' component={(props) => <Simulation selectedIndex = {props.match.params.id} 
                simulation = {this.simulationsList[props.match.params.id]} divClassName ={'SimulationLibrary'}
                button1Link ={'/Simulation/'} button2Link ={'/SimulationLibrary'} SimulationClassName={'SimulationDetail'}
                button1Name ={'בחירה'} button2Name = {'חזרה'}/>} /> 
          <Route exact path='/SimulationLobby' component={SimulationLobby} />
          <Route exact path='/PassiveParticipatorSimulation' component={PassiveParticipatorSimulation} />
          <Route exact path='/ActiveParticipator' component={ActiveParticipator} />
          <Route exact path='/ManagerStartSimulation' component={ManagerStartSimulation} />
          <Route exact path='/ManagerSimulationInAction' component={ManagerSimulationInAction} /> 
          <Route exact path='/PassiveManagerSimulation' component={PassiveManagerSimulation} />         
          {/* <Route  component={NotFound}/> */}
        </Switch>        
      </BrowserRouter>
      </div>
    );
  }
}

export default App;

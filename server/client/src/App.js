import React, { Component } from "react";
import { BrowserRouter , Switch, Route} from 'react-router-dom';
import "./App.css";
import axios from "axios";
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

      <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/SimulationLibrary' render = {() => <SimulationLibrary simulationsList = {this.simulationsList} setsimulationNum = {this.setsimulationNum}/> }/>         
          <Route exact path='/Simulation' render={() => <Simulation simulationsList = {this.simulationsList} simulationID = {this.state.simulationID} scereenName={'Details'}/>} /> 
          {/* <Route  component={NotFound}/> */}
        </Switch>        
      </div>
      </BrowserRouter>

    );
  }
}

export default App;

import React, { Component } from "react";
import { BrowserRouter , Switch, Route} from 'react-router-dom';
import "./App.css";
import axios from "axios";
import Simulations from './Simulations';

class App extends Component {
  url = "/api";
  state = { simulationsList:[{ID:1,name:'aaaaa',
    desc:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',time:40,participants:10},
    {ID:2,name:'bbbbbb',
    desc:'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',time:50,participants:4},
    {ID:3,name:'cccccc',
    desc:'cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc',time:30,participants:3}] };

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
        <br></br>

        <p>Hello Nathan Krasney</p>
        <button onClick={this.clickHandler}>Access express server !!!!!</button>
        <p>Got : {this.state.data}</p>        

        <Switch>
        
          <Route exact path='/' render = {() => <Simulations simulationsList = {this.state.simulationsList}/> }/>
          {/* <Route exact path='/Simulation' render={() => <Simulation simulationsList = {this.simulationsList} />} />  */}
          {/* <Route  component={NotFound}/> */}
        </Switch>        


        {/* <Button>ClickMe</Button>
        <Button variant="primary">Primary</Button>         */}
      </div>
      </BrowserRouter>

    );
  }
}

export default App;

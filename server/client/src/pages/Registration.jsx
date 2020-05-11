import React, { Component } from 'react';
import Input from "../components/Input";
import Button from "../components/Button";
import BackButton from '../components/BackButton';
import "./Registration.css"
import { Redirect } from 'react-router-dom';


class Registration extends Component {
    
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
        this.state = { UserName: '',isError:false,redirectToLogin: false };
    }

    goBack(){
        this.props.history.goBack();
    }

    ChangeHandler = (event) => {
        this.setState({UserName: event.target.value});
      }

    UserName= () =>{
        let words = this.state.UserName.trim().split(/\s+/).length;
        if (words > 1 ){
            this.setState({ isError: false });
            console.log(this.state.UserName);
            this.setState({ redirectToLogin: true })
        }
        else{
            this.setState({ isError: true })
            this.setState({ redirectToLogin: false })
        }

          
    }
    render() {
        if(this.state.redirectToLogin){
            return <Redirect to="/Login" />
        }
        return (
            
            <div>
                <br/><br/>
                <BackButton onClick={this.goBack}></BackButton>
                <h1>הרשמה</h1>
                <p>הכניסו את שמכם המלא כפי שיופיע באפליקציה</p >
                <br/>
                {this.state.isError ? <p style={{ color: 'red' }}>אנא הכנס את שמך המלא*</p> : ""}
                <Input       
                    onChange={this.ChangeHandler}
                    placeholder="שם מלא" />
                <a href="/Login" style={{ color: 'black' }}>כבר נרשמת? התחבר כאן</a> 
                <br/>
                <br/>
                <Button onClick={this.UserName} ButtonName='הבא'></Button>
            </div>
        );
    }
}

export default Registration;











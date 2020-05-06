import React, { Component } from 'react';
import Input from "../components/Input";
import Button from "../components/Button";
import "./Registration.css"

class Registration extends Component {
    state ={UserName:'',isError:'true'}
    render() {
        return (
            
            <div>
                <br/><br/>
                <svg class="bi bi-arrow-left-short" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M7.854 4.646a.5.5 0 010 .708L5.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M4.5 8a.5.5 0 01.5-.5h6.5a.5.5 0 010 1H5a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>
                </svg>
                <h1>הרשמה</h1>
                <p>הכניסו את שמכם המלא כפי שיופיע באפליקציה</p >
                <br/>
                {this.state.isError ? <p style={{ color: 'red' }}>אנא הכנס את שמך המלא*</p> : ""}
                <Input placeholder="שם מלא" />
                <a href="" style={{ color: 'black' }}>כבר נרשמת? התחבר כאן</a> 
                <br/>
                <br/>
                <Button link='/Login' ButtonName='הבא'></Button>
            </div>
        );
    }
}

export default Registration;











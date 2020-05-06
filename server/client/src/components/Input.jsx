import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


function Input(props) {

        return (
            <div>
                <input type="text"  placeholder={props.placeholder} size="70" ></input>
            </div>
        );
}

export default Input;
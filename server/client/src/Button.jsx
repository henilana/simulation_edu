import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

function Button(props) {
    return(
        <div className="button-container">
              <Link to={props.link}>
                  <button class="w-25 rounded-0 p-3 btn btn-primary btn-lg">
                        {props.ButtonName}
                  </button> 
              </Link>
        </div>
    )
}
export default Button;

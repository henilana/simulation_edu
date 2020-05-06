import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
function Button(props) {
    return(
        <div className="button-container">
              <Link to={props.link}>
                  <button class="btn btn-dark btn">
                        {props.ButtonName}
                  </button> 
              </Link>
        </div>
    )
}
export default Button;
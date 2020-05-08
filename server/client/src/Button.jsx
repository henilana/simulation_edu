import React from 'react';
import { Link } from 'react-router-dom';

function Button(props) {
    return(
        <div className="button-container">
           <div class="row">
              <Link to={props.link} class="rounded-0 p-3 col-4 btn btn-primary btn-lg">{props.ButtonName}</Link>
           </div>
        </div>
    )
}
export default Button;
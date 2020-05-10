import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap'

function MyButton(props) {
    return(
        <div>
              <Link to={props.link}>
                  <Button variant="dark">
                        {props.ButtonName}
                  </Button> 
              </Link>
        </div>
    )
}
export default MyButton;

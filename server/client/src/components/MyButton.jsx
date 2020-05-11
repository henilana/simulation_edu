import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'

function MyButton(props) {
    return (
        <Link to={props.link}>
            <Button className={props.classNames} variant="dark">
                {props.ButtonName}
            </Button>
        </Link>
    )
}
export default MyButton;

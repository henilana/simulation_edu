import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import './simScreen.css'

// import Favicon from 'react-favicon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

class SimScreen extends Component {


    constructor(props) {
        super(props);
   }

    render() {
        (this.props.dir === "rtl") ? this.direction = { direction: "rtl", textAlign: "right" } : this.direction = { direction: "ltr", textAlign: "left" }

        return (
            <Container className="d-flex justify-content-center">
                <Card className="Cards mt-4 mb-4 col-lg-4 rounded-lg shadow-sm" border="10px solid rgb(62, 37, 58)"  style={{width:'100%'}}>
                    <Card.Title className="Title mt-4 mb-4 mx-2 " >{this.props.title}<FontAwesomeIcon pull="right" icon={faUserCircle} /></Card.Title>
                    <Card.Subtitle className=" Title mb-1 p-2" style={{ fontSize: "larger" }} >{this.props.subTitleTitle}
                    </Card.Subtitle>

                    <Card.Body  >
                        <Card.Text style={this.direction}>
                            <p className="mb-4 p-2 pSim"  style={{height: "7vw" }}>{this.props.subTitleText}</p>
                            <p className="mt-4 p-2 pSim" style={{height: "25vw" }}>{this.props.simActionText}</p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="m-2">
                        <Button block varient="success" style={{ fontSize: "larger" }} >{this.props.Button1Text}</Button>
                        {this.props.numOfButtons === 2 ? <Button variant="danger">{this.props.Button2Text}</Button> : ""}
                    </Card.Footer>
                </Card>

            </Container>
        );
    }
}

export default SimScreen;
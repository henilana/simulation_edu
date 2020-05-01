import React, { Component } from 'react';
import  Card from 'react-bootstrap/Card';
import  Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
// import Favicon from 'react-favicon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

class SimScreen extends Component {
    
    
    constructor(props){
        super(props);
        // this.state={isMenahel:this.props.isMenahel, numOfButtons:this.props.numOfButtons, simActionText:this.props.simActionText }
    }

    render() {
        return (
           <Container Fluid >
            <div>
                <Card className="Cards col-lg-4" border="dark" bg="light"  style={{ minHeight: '100vh',maxHeight: '100vh', width: '100%' }}>
                    <Card.Title className="Title" style={{marginTop:"5vh", marginBottom:"10vh"}}>{this.props.title}<FontAwesomeIcon style={{marginRight:"1vh"}} pull="right" icon={faUserCircle}/></Card.Title>
                    <Card.Subtitle className="Title" style={{fontSize:"larger" , textAlign:"center", paddingBottom:"10vh"}}>{this.props.subTitleTitle}
                        
                        </Card.Subtitle>
                    <Card.Body  style={{marginBottom:"10vh"}}>
                        <Card.Text   style={{ direction:"rtl", textAlign:"right" , msOverflowY: "scroll"}}>
                            <p className="Texts " style={{marginBottom:"5vh"}}>{this.props.subTitleText}</p>
                            <p  className="Texts ">{this.props.simActionText}</p>
                            
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer style={{marginTop:"10vh"}}>
                    <Button block varient="success" >{this.props.Button1Text}</Button>
                    {this.props.numOfButtons===2? <Button  variant="danger">{this.props.Button2Text}</Button> : ""}
                    </Card.Footer>
                </Card>
            </div>
            </Container> 
        );
    }
}

export default SimScreen;
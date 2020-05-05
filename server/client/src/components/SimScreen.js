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
         (this.props.dir==="rtl")? this.direction={  direction:"rtl", textAlign:"right"  }: this.direction={  direction:"ltr", textAlign:"left"  }
        
        return (
           <Container  className="d-flex justify-content-center">
              
                <Card className="Cards col-lg-4 rounded-lg shadow-lg" border="dark" shadow="lg" rounded="lg"  style={{  width: '100%' }}>
                    
                        <Card.Title className="Title mt-4 mb-4 mx-2 " >{this.props.title}<FontAwesomeIcon  pull="right" icon={faUserCircle}/></Card.Title>
                            <Card.Subtitle className=" Title mb-1 p-2" style={{fontSize:"larger"}} >{this.props.subTitleTitle}
                            </Card.Subtitle>
                   
                    <Card.Body  >
                        <Card.Text   style={this.direction}>
                            <div  className="mb-4 p-2" style={{height:"7vw", overflow:"auto"}}>{this.props.subTitleText}</div> 
                            <div  className="mt-4 p-2" style={{height:"25vw", overflow:"auto"}}>{this.props.simActionText}</div>                              
                        {/* {this.props.simActionText} */}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="m-2">
                    <Button block varient="success" style={{fontSize:"larger"}} >{this.props.Button1Text}</Button>
                    {this.props.numOfButtons===2? <Button  variant="danger">{this.props.Button2Text}</Button> : ""}
                    </Card.Footer>
                </Card>
            
            </Container> 
        );
    }
}

export default SimScreen;
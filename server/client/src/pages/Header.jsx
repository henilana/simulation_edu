import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FaRegUserCircle } from "react-icons/fa";
import { BsClock } from "react-icons/bs";
// TO DO :
// 1.handle RTL-LTR
// 2.replace uuid component
// 3.replace user component
// 4.replace time component
function Header(props) {
  return (
    <div className="header">
      <Container>
        <Row>
          <Col xs={3}>
            <Button variant="outline-secondary" size="sm">
              UUID
            </Button>
          </Col>
          <Col xs={6} className="title">
            {props.title}
          </Col>
          <Col xs={3}>
            <h3>
            
              <FaRegUserCircle />
            </h3>
          </Col>
        </Row>
        <Row>
          <Col xs={1}>{props.showClockNearDesc? <h2>
              <BsClock />
            </h2>:''}
           
          </Col>
          {props.showDescOrButton?
          <Col xs={10} className="desc">
            {props.desc?props.desc: <Button variant="secondary" size="sm">{props.buttonDesc}</Button>}
          </Col>:
          <Col xs={10} > </Col>}
          <Col xs={1}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;

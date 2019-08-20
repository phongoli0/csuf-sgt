import React from 'react';
import { Row, Col, Badge } from 'reactstrap';

function Header(props) {
  return (
    <Row className= "header">
      <img src="images/tuffy.png" className="logo"></img>
      <Col className="title">CSUF Grade Table</Col>
      <Col sm="4" className="average">Average:<Badge className="badge" color="secondary">{props.average}</Badge></Col>
    </Row>
  );
}

export default Header;

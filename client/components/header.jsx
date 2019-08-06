import React from 'react';
import { Badge } from 'reactstrap';

function Header(props) {
  return (
    <div className= "header row">
      <img src="images/tuffy.png" className="logo"></img>
      <div className="col-sm title">CSUF Grade Table</div>
      <div className="average col-sm-4">Average:<Badge className="badge" color="secondary">{props.average}</Badge></div>
    </div>
  );
}

export default Header;

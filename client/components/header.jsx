import React from 'react';
import { Badge } from 'reactstrap';

function Header(props) {
  return (
    <div className= "header row">
      <img src="images/tuffy.png" className="logo"></img>
      <div className="col-sm-7 title">CSUF Grade Table</div>
      <div className="average col-sm">Average:<Badge className="badge" color="secondary">{props.average}</Badge></div>
    </div>
  );
}

export default Header;

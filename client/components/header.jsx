import React from 'react';
import { Badge } from 'reactstrap';

function Header(props) {
  return (
    <div className={'row'}>
      <h1 className={'col-sm-8'}>Student Grade Table</h1>
      <h2>Average <Badge color="secondary">{props.average}</Badge></h2>
    </div>
  );
}

export default Header;

// return (
//   <div className={'row'}>
//     <h1 className={'col-sm-8'}>Student Grade Table</h1>
//     <h2 className={'col-sm-4'}> Average:
//       <span className="badge badge-secondary"> {props.average}</span>
//     </h2>
//   </div>
// );
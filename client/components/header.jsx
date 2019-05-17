import React from 'react';

function Header(props) {
  return (
    <div>
      <h1 className={'header'}>Student Grade Table</h1>
      <h2 className={'average'}> Average:
        <span className="badge badge-secondary"> {props.average}
        </span>
      </h2>
    </div>
  );
}

export default Header;

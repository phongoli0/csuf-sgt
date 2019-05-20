import React from 'react';

function Grade(props) {
  return (
    <tr>
      <td>{props.grade.name}</td>
      <td>{props.grade.course}</td>
      <td>{props.grade.grade}</td>
      <td>
        <button
          type="button"
          className=" btn btn-danger"
          onClick={event => {
            event.preventDefault();
            props.onClicked(props.grade.id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Grade;

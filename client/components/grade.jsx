import React from 'react';
import { Button } from 'reactstrap';

function Grade(props) {
  return (
    <tr>
      <td>{props.grade.name}</td>
      <td>{props.grade.course}</td>
      <td>{props.grade.grade}</td>
      <td>
        <button
          className="btn btn-info editButton"
          onClick={event => {
            event.preventDefault();
            props.setEditing({
              id: props.grade.id,
              name: props.grade.name,
              course: props.grade.course,
              grade: props.grade.grade });
          }}
        >
          Edit
        </button>
        <Button
          className="deleteButton"
          color="danger"
          onClick={event => {
            event.preventDefault();
            props.deleteGrade(props.grade.id);
          }}>
          Delete
        </Button>
        {''}
      </td>
    </tr>
  );
}

export default Grade;

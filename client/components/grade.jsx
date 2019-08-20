import React from 'react';
import { Button } from 'reactstrap';

function Grade(props) {
  return (
    <tr>
      <td>{props.grade.name}</td>
      <td>{props.grade.course}</td>
      <td>{props.grade.grade}</td>
      <td>
        <Button
          className="editButton"
          color="info"
          onClick={event => {
            props.setEditing({
              id: props.grade.id,
              name: props.grade.name,
              course: props.grade.course,
              grade: props.grade.grade });
          }}
        >
          Edit
        </Button>
        <Button
          className="deleteButton"
          color="danger"
          onClick={event => {
            props.deleteGrade(props.grade.id);
          }}>
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default Grade;

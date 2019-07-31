import React from 'react';
import EditGradeContext from '../context/edit-grade-context';
import { Button } from 'reactstrap';

function Grade(props) {
  return (
    <tr>
      <td>{props.grade.name}</td>
      <td>{props.grade.course}</td>
      <td>{props.grade.grade}</td>
      <td>
        <EditGradeContext.Consumer>
          { context =>
            <button className="btn btn-info editButton" onClick={event => {
              event.preventDefault();
              context.loadToForm({
                id: props.grade.id,
                name: props.grade.name,
                course: props.grade.course,
                grade: props.grade.grade
              });
            }} >Edit</button>
          }
        </EditGradeContext.Consumer>
        <Button
          className="deleteButton"
          color="danger"
          onClick={event => {
            event.preventDefault();
            props.onClicked(props.grade.id);
          }}>
          Delete
        </Button>{''}
      </td>
    </tr>
  );
}

export default Grade;

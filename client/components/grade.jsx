import React from 'react';

function Grade(props) {
  return (
    <tr>
      <td>{props.grade.name}</td>
      <td>{props.grade.course}</td>
      <td>{props.grade.grade}</td>
      <td>
        <div className="tableButton">
          <i
            className="far fa-edit editButton"
            onClick={event => {
              props.setEditing({
                id: props.grade.id,
                name: props.grade.name,
                course: props.grade.course,
                grade: props.grade.grade });
            }}
          >
          </i>
          <i
            className="far fa-trash-alt deleteButton"
            onClick={event => {
              props.deleteGrade(props.grade.id);
            }}>
          </i>
        </div>
      </td>
    </tr>
  );
}

export default Grade;

import React from 'react';
import Grade from './grade';

function GradeTable(props) {

  const grade = props.grades.map(grade => {
    return (
      <Grade
        grade = {grade}
        key = {grade.id}
        onClicked = {props.onClicked}
      />
    );
  });
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <td scope="col">Name</td>
          <td scope="col">Course</td>
          <td scope="col">Grade</td>
        </tr>
      </thead>
      <tbody>
        {grade}
      </tbody>
    </table>
  );
}

export default GradeTable;

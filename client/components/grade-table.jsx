import React from 'react';
import Grade from './grade';

function GradeTable(props) {

  const grade = props.grades.map(grade => {
    return (
      <Grade
        key={grade.id}
        name={grade.name}
        course = {grade.course}
        grade = {grade.grade}
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

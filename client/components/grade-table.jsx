import React from 'react';
import Grade from './grade';
import { Table } from 'reactstrap';

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
    <div>
    <Table hover striped>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Course</th>
          <th scope="col">Grade</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {grade}
      </tbody>
    </Table>
    </div>
  );
}

export default GradeTable;

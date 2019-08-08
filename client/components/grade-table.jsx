import React from 'react';
import Grade from './grade';
import { Table } from 'reactstrap';

function GradeTable(props) {
  const grade = props.grades.map(grade => {
    return (
      <Grade
        grade = {grade}
        key = {grade.id}
        deleteGrade = {props.deleteGrade}
        setEditing = {props.setEditing}
      />
    );
  });
  return (
    <div className="col-sm-8 table">
      <Table hover striped bordered>
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

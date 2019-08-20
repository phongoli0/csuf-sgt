import React from 'react';
import Grade from './grade';
import { Table, Col } from 'reactstrap';

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
    <Col sm="8" className="table">
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
    </Col>
  );
}

export default GradeTable;

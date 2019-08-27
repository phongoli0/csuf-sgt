import React from 'react';
import Grade from './grade';
import { Table, Col } from 'reactstrap';

class GradeTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  render() {
    let grade = this.props.grades.map(grade => {
      return (
        <Grade
          grade={grade}
          key={grade.id}
          deleteGrade={this.props.deleteGrade}
          setEditing={this.props.setEditing}
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
              <th scope="col" />
            </tr>
          </thead>
          <tbody>{grade}</tbody>
        </Table>
      </Col>
    );
  }
}

export default GradeTable;

import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';
import { Row, Container } from 'reactstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
      gradeToBeEdited: {
        id: 0,
        name: '',
        course: '',
        grade: ''
      }
    };
    this.getAllGrades = this.getAllGrades.bind(this);
    this.addGrade = this.addGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
  }

  componentDidMount() {
    this.getAllGrades();
  }

  getAllGrades() {
    fetch('/api/grades')
      .then(grades => grades.json())
      .then(grades => {
        this.setState({ grades: grades });
      });
  }

  addGrade(newGrade) {
    const post = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newGrade)
    };
    fetch('api/grades', post)
      .then(response => response.json())
      .then(grade => {
        const allGrades = this.state.grades.concat(grade);
        this.setState({ grades: allGrades });
      });
  }

  getAverage() {
    const gradeInfo = this.state.grades;
    let newTotal = 0;
    for (let grade of gradeInfo) {
      newTotal += parseInt(grade.grade);
    }
    const average = newTotal / gradeInfo.length;
    const total = average.toFixed(0);
    if (isNaN(total)) {
      return 'N/A';
    }
    return total;
  }

  deleteGrade(id) {
    fetch('/api/grades/' + id, {
      method: 'DELETE'
    }).then(() => {
      let grades = this.state.grades.filter(grade => grade.id !== id);
      this.setState({ grades });
    });
  }

  updateGrade(grade) {
    fetch(`api/grades/${grade.id}`, {
      method: 'PUT',
      body: JSON.stringify(grade),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(updatedGrade => {
        const grades = this.state.grades.map(grade =>
          grade.id === updatedGrade.id ? updatedGrade : grade
        );
        this.setState({ grades });
      });
  }

  setEditing(grade) {
    this.setState({ gradeToBeEdited: grade });
  }

  submitGrade(grade) {
    if (grade.id === 0) {
      this.addGrade(grade);
    } else {
      this.updateGrade(grade);
    }
  }

  render() {
    let newAverage = this.getAverage();
    return (
      <div className="wrapper">
        <Container fluid className="top">
          <Header average={newAverage} />
        </Container>
        <Container fluid className="bottom">
          <Row className="row">
            <GradeTable
              grades={this.state.grades}
              deleteGrade={this.deleteGrade.bind(this)}
              setEditing={this.setEditing.bind(this)}
            />
            <GradeForm
              onSubmit={this.submitGrade.bind(this)}
              gradeToBeEdited={this.state.gradeToBeEdited}
            />
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

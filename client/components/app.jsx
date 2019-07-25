import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
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
        let allGrades = this.state.grades.concat(grade);
        this.setState({ grades: allGrades });
      });
  }

  deleteGrade(id) {
    fetch('/api/grades/' + id, {
      method: 'DELETE'
    })
      .then(() => {
        let grades = this.state.grades.filter(grade => grade.id !== id);
        this.setState({ grades });
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

  render() {
    const newAverage = this.getAverage();
    return (
      <div className="wrapper">
        <div className="container-fluid top">
          <Header average = {newAverage}/>
        </div>
        <div className="container-fluid bottom">
          <div className="row">
            <GradeTable grades = {this.state.grades} onClicked={this.deleteGrade}/>
            <GradeForm onSubmit={this.addGrade}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

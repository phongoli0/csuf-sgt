import React from 'react';
import Header from './header';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.getAllGrades = this.getAllGrades.bind(this);
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

  getAverage() {
    const gradeInfo = this.state.grades;
    let newTotal = 0;
    for (let grade of gradeInfo) {
      newTotal += grade.grade;
    }
    const average = newTotal / gradeInfo.length;
    const total = average.toFixed(0);
    return total;
  }

  render() {
    const newAverage = this.getAverage();
    return (
      <div>
        <Header average = {newAverage}/>
        <GradeTable grades = {this.state.grades}/>
      </div>
    );
  }
}

export default App;

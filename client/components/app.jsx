import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';
import EditGradeContext from '../context/edit-grade-context.js';

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
        const gradeToBeEdited = {
          id: 0,
          name: '',
          course: '',
          grade: ''
        };
        this.setState({ grades: allGrades, gradeToBeEdited });
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
        // const avgGrade = this.getAverageGrade(grades);
        const gradeToBeEdited = {
          id: 0,
          name: '',
          course: '',
          grade: ''
        };
        this.setState({ grades, gradeToBeEdited });
      });
  }

  submitGrade(grade) {
    if (grade.id === 0) {
      this.addGrade(grade);
    } else {
      this.updateGrade(grade);
    }
  }

  // cancelEditGrade() {
  //   this.setState({
  //     gradeToBeEdited: {
  //       id: 0,
  //       name: "",
  //       course: "",
  //       grade: 0
  //     }
  //   });
  // }

  loadGradeToBeEditedToForm(gradeToBeEdited) {
    this.setState({ gradeToBeEdited });
  }

  render() {
    const newAverage = this.getAverage();
    return (
      <div className="wrapper">
        <div className="container-fluid top">
          <Header average={newAverage} />
        </div>
        <div className="container-fluid bottom">
          <div className="row">
            <EditGradeContext.Provider
              value={{
                grade: this.state.gradeToBeEdited,
                loadToForm: this.loadGradeToBeEditedToForm.bind(this)
              }}
            >
              <GradeTable
                grades={this.state.grades}
                onClicked={this.deleteGrade}
              />
              <GradeForm
                onSubmit={this.submitGrade.bind(this)}
                loadedGrade={this.state.gradeToBeEdited}
                // cancelEditGrade={this.cancelEditGrade.bind(this)}
              />
            </EditGradeContext.Provider>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

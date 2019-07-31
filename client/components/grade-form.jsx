import React from 'react';
import { InputGroup, InputGroupAddon, Input, Form, FormGroup } from 'reactstrap';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: '',
      course: '',
      grade: '',
      message: ''
    };
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  // handleChange(event) {
  // this.setState({
  //   [event.target.name]: event.target.value
  // });
  // }

  handleSubmit(event) {
    if (
      this.state.grade < 100 &&
      this.state.grade >= 0 &&
      this.state.name.length >= 1 &&
      this.state.course.length >= 1
    ) {
      event.preventDefault();
      this.props.onSubmit(this.state);
      this.setState({
        id: 0,
        name: '',
        course: '',
        grade: ''
      });
    }
  }

  handleReset(event) {
    this.setState({
      id: 0,
      name: '',
      course: '',
      grade: ''
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.loadedGrade.id !== prevProps.loadedGrade.id) {
      this.setState({ ...this.props.loadedGrade });
    }
  }

  // handleChange(event, tagName) {
  //   const editGrade = { ...this.state.editGrade };
  //   editGrade[ tagName ] = event.target.value;
  //   this.setState({ ...editGrade });
  // }

  gradeValidate(event, tagName) {
    if (this.state.grade <= 100 && this.state.grade > 0) {
      const editGrade = { ...this.state.editGrade };
      editGrade[tagName] = event.target.value;
      this.setState({
        ...editGrade,
        message: ''
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value,
        message: 'Must be between 0-100'
      });
    }
  }

  nameValidate(event, tagName) {
    if (this.state.name.length >= 1) {
      const editGrade = { ...this.state.editGrade };
      editGrade[tagName] = event.target.value;
      this.setState({
        ...editGrade,
        message: ''
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value,
        message: 'Please enter a valid name'
      });
    }
  }

  courseValidate(event, tagName) {
    if (this.state.course.length >= 1) {
      const editGrade = { ...this.state.editGrade };
      editGrade[tagName] = event.target.value;
      this.setState({
        ...editGrade,
        message: ''
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value,
        message: 'Please enter a valid course'
      });
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="col-sm form">
        <div>
          <FormGroup>
            <InputGroup>
              <InputGroupAddon
                addonType="prepend"
                className="input-group-text fas fa-user icon"
              />
              <Input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                value={this.state.name}
                onChange={event => {
                  this.nameValidate(event, 'name');
                }}
              />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <InputGroupAddon
                addonType="prepend"
                className="input-group-text fas fa-list-alt icon"
              />
              <Input
                type="text"
                className="form-control"
                placeholder="Course"
                name="course"
                value={this.state.course}
                onChange={event => {
                  this.courseValidate(event, 'course');
                }}
              />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <InputGroupAddon
                addonType="prepend"
                className="input-group-text fas fa-graduation-cap icon cap"
              />
              <Input
                type="number"
                className="form-control"
                placeholder="Grade"
                name="grade"
                value={this.state.grade}
                onChange={event => {
                  this.gradeValidate(event, 'grade');
                }}
              />
            </InputGroup>
            <div>{this.state.message}</div>
          </FormGroup>
        </div>
        <FormGroup>
          <div className="buttons">
            <button type="submit" className="btn btn-success addButton">
              {this.state.id === 0 ? 'Add' : 'Update'}
            </button>
            <button
              type="reset"
              className="btn btn-danger cancelButton"
              onClick={this.handleReset}
            >
              Cancel
            </button>
          </div>
        </FormGroup>
      </Form>
    );
  }
}

export default GradeForm;

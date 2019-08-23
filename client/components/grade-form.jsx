import React from 'react';
import { InputGroup, InputGroupAddon, Input, Form, FormGroup, Button } from 'reactstrap';

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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.gradeToBeEdited.id !== prevProps.gradeToBeEdited.id) {
      this.setState(this.props.gradeToBeEdited);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      id: 0,
      name: '',
      course: '',
      grade: ''
    });
  }

  handleReset(event) {
    this.setState({
      id: 0,
      name: '',
      course: '',
      grade: ''
    });
  }

  nameValidate(event) {
    if (this.state.name.length >= 1) {
      this.setState({
        [event.target.name]: event.target.value,
        message: ''
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value,
        message: 'Please enter a valid name'
      });
    }
  }

  courseValidate(event) {
    if (this.state.course.length >= 1) {
      this.setState({
        [event.target.name]: event.target.value,
        message: ''
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value,
        message: 'Please enter a valid course'
      });
    }
  }

  gradeValidate(event) {
    if (this.state.grade <= 100 && this.state.grade > 0) {
      this.setState({
        [event.target.name]: event.target.value,
        message: ''
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value,
        message: 'Must be between 0-100'
      });
    }
  }

  render() {
    let regex = /\d+/;
    let addButton;
    if (
      this.state.grade <= 100 &&
      this.state.grade >= 0 &&
      regex.test(this.state.grade) &&
      this.state.name.length >= 1 &&
      this.state.course.length >= 1
    ) {
      addButton = <Button color="success" className="addButton">
        {this.state.id === 0 ? 'Add' : 'Update'}</Button>;
    } else {
      addButton = <Button color="secondary" disabled className="addButton">Please fill out form</Button>;
    }
    return (
      <Form onSubmit={this.handleSubmit} className="col-sm" onReset={this.handleReset}>
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
                  this.nameValidate(event);
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
                  this.courseValidate(event);
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
                  this.gradeValidate(event);
                }}
              />
            </InputGroup>
            <div>{this.state.message}</div>
          </FormGroup>
        </div>
        <FormGroup>
          <div className="buttons">
            {addButton}
            <Button
              color="danger"
              type="reset"
              className="cancelButton"
            >
              Cancel
            </Button>
          </div>
        </FormGroup>
      </Form>
    );
  }
}

export default GradeForm;

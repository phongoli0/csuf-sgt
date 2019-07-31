import React from 'react';
import { InputGroup, InputGroupAddon, Input, Form } from 'reactstrap';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: '',
      course: '',
      grade: 0
    };
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  // handleChange(event) {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      id: 0,
      name: '',
      course: '',
      grade: 0
    }
    );
  }

  handleReset(event) {
    this.setState({
      id: 0,
      name: '',
      course: '',
      grade: 0
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.loadedGrade.id !== prevProps.loadedGrade.id) {
      this.setState({ ...this.props.loadedGrade });
    }
  }

  inputChangeHandler(event, tagName) {
    const editGrade = { ...this.state.editGrade };
    editGrade[ tagName ] = event.target.value;
    this.setState({ ...editGrade });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="col-sm form">
        <div>
          <InputGroup>
            <InputGroupAddon addonType="prepend" className="input-group-text fas fa-user icon"></InputGroupAddon>
            <Input type="text" className="form-control" placeholder="Name" name='name' value={this.state.name} onChange={event => { this.inputChangeHandler(event, 'name'); }}></Input>
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend" className="input-group-text fas fa-list-alt icon"></InputGroupAddon>
            <Input type="text" className="form-control" placeholder="Course" name='course' value={this.state.course} onChange={event => { this.inputChangeHandler(event, 'course'); } }></Input>
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend" className="input-group-text fas fa-graduation-cap icon"></InputGroupAddon>
            <Input type="number" className="form-control" placeholder="Grade" name='grade'value={this.state.grade} onChange={event => { this.inputChangeHandler(event, 'grade'); }}></Input>
          </InputGroup>
        </div>
        <div className="buttons">
          <button type='submit' className="btn btn-success addButton">Add</button>
          <button type='reset' className="btn btn-danger cancelButton" onClick={this.handleReset} >Cancel</button>
        </div>
      </Form>
    );
  }
}

export default GradeForm;

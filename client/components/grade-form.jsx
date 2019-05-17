import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  handleReset(event) {
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    return (
      <div className="col">
        <form className="form-row" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text fas fa-user" id="inputGroup-sizing-sm"></span>
            </div>
            <input type="text" className="form-control" placeholder="Enter Name" name='name' value={this.state.name} onChange={this.handleChange}></input>
          </div>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text far fa-list-alt" ></span>
            </div>
            <input type="text" className="form-control" placeholder="Enter Course" name='course' value={this.state.course} onChange={this.handleChange}></input>
          </div>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text fas fa-graduation-cap"></span>
            </div>
            <input type="number" className="form-control" placeholder="Enter Grade" name='grade'value={this.state.grade} onChange={this.handleChange}></input>
          </div>
          <button type='submit' className="btn btn-success">Add</button>
          <button type='reset' className="btn btn-danger" onClick={this.handleReset} >Cancel</button>
        </form>
      </div>
    );
  }
}

export default GradeForm;

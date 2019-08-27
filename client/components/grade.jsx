import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

class Grade extends React.Component {
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
    return (
      <tr>
        <td>{this.props.grade.name}</td>
        <td>{this.props.grade.course}</td>
        <td>{this.props.grade.grade}</td>
        <td>
          <div className="tableButton">
            <i
              className="far fa-edit editButton"
              onClick={event => {
                this.props.setEditing({
                  id: this.props.grade.id,
                  name: this.props.grade.name,
                  course: this.props.grade.course,
                  grade: this.props.grade.grade
                });
              }}
            />
            <i
              className="far fa-trash-alt deleteButton"
              onClick={this.toggle}
            />
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggle}
              className={this.props.className}
            >
              <ModalBody className="deleteModalBody">
                Are you sure you want to delete {this.props.grade.name}
              </ModalBody>
              <ModalFooter className="deleteModalFooter">
                <Button
                  color="danger"
                  onClick={event => {
                    this.props.deleteGrade(this.props.grade.id);
                  }}
                >
                  Delete
                </Button>
                <Button
                  color="secondary"
                  onClick={this.toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </td>
      </tr>
    );
  }
}

export default Grade;

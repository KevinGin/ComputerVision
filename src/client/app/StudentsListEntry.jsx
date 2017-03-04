import React from 'react';
import {render} from 'react-dom';
import {Link, browserHistory} from 'react-router';
import css from '../css/nav.css';

///not getting here

class StudentsListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // State variables to go here
    };
  }

// --------------------------------------------------------------------
// Component Lifecycle Functions
// --------------------------------------------------------------------

  componentDidMount() {

  }
// --------------------------------------------------------------------


// --------------------------------------------------------------------
// Event Handlers
// --------------------------------------------------------------------

  handleSomeEvent(someParameter) {

  }
// --------------------------------------------------------------------

  render() {
    return (
      <tr name={this.props.student.StudentName} onClick={() => {
        this.props.handleStudentsListEntryClick(
          this.props.student.StudentName,
          this.props.student.StudentId,
          this.props.student.courseName
          )}}>
        <td>{this.props.student.StudentId}</td>
        <td>{this.props.student.StudentName}</td>
        <td>{this.props.student.courseName}</td>
      </tr>
    );
  }
}

export default StudentsListEntry;

import React from 'react';
import { Button } from 'reactstrap';

function Grade(props) {
  return (
    <tr>
      <td>{props.grade.name}</td>
      <td>{props.grade.course}</td>
      <td>{props.grade.grade}</td>
      <td>
        <Button
          color="danger"
          onClick={event => {
            event.preventDefault();
            props.onClicked(props.grade.id);
          }}
        >
          Delete
        </Button>{" "}
      </td>
    </tr>
  );
}

export default Grade;


// return (
//   <tr>
//     <td>{props.grade.name}</td>
//     <td>{props.grade.course}</td>
//     <td>{props.grade.grade}</td>
//     <td>
//       <button
//         type="button"
//         className=" btn btn-danger"
//         onClick={event => {
//           event.preventDefault();
//           props.onClicked(props.grade.id);
//         }}
//       >
//         Delete
//       </button>
//     </td>
//   </tr>
// );

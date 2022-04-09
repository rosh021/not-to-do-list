import React from "react";
import { Form, Button } from "react-bootstrap";

export const FormRow = ({ task, hr }) => {
  console.log(task, hr);
  return (
    <tr>
      <td>
        <Form.Check type="checkbox" />
      </td>
      <td>{task}</td>
      <td>{hr}</td>
      <td className="text-end">
        <Button variant="danger">
          <i className="fas fa-trash-alt"></i>
        </Button>{" "}
        <Button variant="primary" className="g-2">
          <i className="fas fa-long-arrow-right"></i>
        </Button>
      </td>
    </tr>
  );
};

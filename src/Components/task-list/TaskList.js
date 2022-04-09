import { Button } from "react-bootstrap";
import React, { useState } from "react";

import { Row, Col, Table, Form } from "react-bootstrap";
import { FormRow } from "../form/FormRow";

export const TaskList = ({
  taskList,
  handelOnClick,
  shiftOnClick,
  TotalHour,
}) => {
  // const [newList, setList] = useState(taskList);

  let goodTask = 0;

  return (
    <>
      <h4 className="text-center py-3">Task List</h4>
      <hr />
      {taskList.map((obj, i) => {
        goodTask += Number(obj.hr);
        TotalHour(goodTask);
        // const { task, hr } = obj;

        return (
          <>
            {/* Task list */}
            <Table striped hover>
              <tbody>
                <tr>
                  <td>
                    <Form.Check type="checkbox" />
                  </td>
                  <td>{obj.task}</td>
                  <td>{obj.hr}</td>
                  <td className="text-end" key={i}>
                    <Button variant="danger" onClick={() => handelOnClick(i)}>
                      <i className="fas fa-trash-alt"></i>
                    </Button>{" "}
                    <Button
                      variant="primary"
                      className="g-2"
                      onClick={() => shiftOnClick(i)}
                    >
                      <i className="fas fa-long-arrow-right"></i>
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </>
        );
      })}
    </>
  );
};

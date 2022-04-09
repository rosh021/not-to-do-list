import { Button } from "react-bootstrap";
import React from "react";

import { Row, Col, Table, Form } from "react-bootstrap";
import { FormRow } from "../form/FormRow";

export const BadList = ({
  badList,
  removeFromBadList,
  shiftToTaskList,
  handelBadHrs,
  totalBadHour,
}) => {
  let badHrs = 0;

  return (
    <div>
      <h4 className="text-center py-3">Bad List</h4>
      <hr />
      {/* Task list */}

      {badList.map((obj, i) => {
        badHrs += Number(obj.hr);

        handelBadHrs(badHrs);
        return (
          <>
            <Table striped hover>
              <tbody>
                <tr>
                  <td>
                    <Form.Check type="checkbox" />
                  </td>
                  <td>{obj.task}</td>
                  <td>{obj.hr}</td>
                  <td className="text-end">
                    <Button
                      variant="danger"
                      onClick={() => removeFromBadList(i)}
                    >
                      <i className="fas fa-trash-alt"></i>
                    </Button>{" "}
                    <Button
                      variant="warning"
                      className="g-2"
                      onClick={() => shiftToTaskList(i)}
                    >
                      <i className="fas fa-long-arrow-left"></i>
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </>
        );
      })}

      <h4 className="pt-5">You Could have saved: {totalBadHour}</h4>
    </div>
  );
};

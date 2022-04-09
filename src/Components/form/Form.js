import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { TaskList } from "../task-list/TaskList";
import "./Form.css";

// const object = {
//   task: "",
//   hr: "",
// };
export const AddForm = ({ addTOTaskList, addTotalHours }) => {
  const [data, setData] = useState({ task: "", hr: "" });

  const handelOnChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handelOnSubmit = (e) => {
    e.preventDefault();
    if (data.task && data.hr) {
      addTOTaskList(data);

      setData({ task: "", hr: "" });
      // addTotalHours(hr);
      addTotalHours(data.hr);
    }
  };

  return (
    <div className="form">
      <Form className="text-center" onSubmit={handelOnSubmit}>
        <Row className="g-2">
          <Col md={7}>
            <Form.Control
              placeholder="Task..."
              type="text"
              name="task"
              value={data.task}
              onChange={handelOnChange}
              required
            />
          </Col>
          <Col md={3}>
            <Form.Control
              placeholder="Hour"
              type="number"
              name="hr"
              value={data.hr}
              onChange={handelOnChange}
              required
            />
          </Col>
          <Col md={2}>
            <Button variant="primary" type="submit">
              Add Task
            </Button>
          </Col>
        </Row>
      </Form>
      <hr className="py" />
    </div>
  );
};

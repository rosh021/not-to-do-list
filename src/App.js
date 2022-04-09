import "./App.css";
import { AddForm } from "./Components/form/Form";
import { Title } from "./Components/Title/Title";
import { Col, Container, Row } from "react-bootstrap";
import { TaskList } from "./Components/task-list/TaskList";
import { useState } from "react";
import { BadList } from "./Components/task-list/BadList";
import { Button } from "./Components/Button";

const totalHours = 24 * 7;

function App() {
  const [taskList, setTaskList] = useState([]);
  const [badList, setBadList] = useState([]);
  const [hour, setHour] = useState(0);
  const [badHour, setBadHour] = useState(0);

  const deleteTask = () => {
    return window.confirm("Are you sure to delete this Task?");
  };

  let badHours = 0;
  let goodHours = 0;

  const TotalHour = (goodTask) => {
    goodHours = goodTask;
  };

  const handelBadHrs = (badHrs) => {
    badHours = badHrs;
    setBadHour(badHours);
    setHour(badHours + goodHours);
  };

  const handelOnClick = (i) => {
    if (deleteTask()) {
      const newList = taskList.filter((item, index) => index !== i);
      setTaskList(newList);
    }
  };

  const shiftOnClick = (i) => {
    const item = taskList[i];
    setBadList([...badList, item]);

    handelOnClick(i);
  };

  const removeFromBadList = (i) => {
    const badLists = badList.filter((item, list) => list !== i);
    setBadList(badLists);
  };

  const shiftToTaskList = (i) => {
    const item = badList[i];
    setTaskList([...taskList, item]);
    removeFromBadList(i);
  };

  // using the reduce method

  const totalTaskHour = taskList.reduce((acc, item) => acc + +item.hr, 0);
  const totalBadHour = badList.reduce((acc, item) => acc + +item.hr, 0);
  const ttlHrs = totalTaskHour + totalBadHour;

  const addTOTaskList = (taskObj) => {
    if (ttlHrs + taskObj.hr <= totalHours) {
      setTaskList([...taskList, taskObj]);
    } else {
      alert("You have exceed to the 168 hrs");
    }
  };
  return (
    <div className="wrapper">
      <Container>
        <Button />
        <Title />
        <AddForm addTOTaskList={addTOTaskList} />

        <Row>
          <Col md="6">
            <TaskList
              taskList={taskList}
              handelOnClick={handelOnClick}
              shiftOnClick={shiftOnClick}
              TotalHour={TotalHour}
            />
          </Col>
          <Col md="6">
            <BadList
              badList={badList}
              removeFromBadList={removeFromBadList}
              shiftToTaskList={shiftToTaskList}
              handelBadHrs={handelBadHrs}
              totalBadHour={totalBadHour}
            />
          </Col>
        </Row>
        {/* Total Hours allocation */}
        <Row>
          <Col>
            <h3 className="pt-2">The Total Allocation hours is: {ttlHrs}</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

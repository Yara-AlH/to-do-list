import { useState } from "react";
import "./Task.css";
import line from "./SFX/line.wav";
import erase from "./SFX/erase.wav";
import TaskSettings from "./TaskSettings";

function Task({ tasks, setTasks }) {
  const [taskCompletion, setTaskCompletion] = useState(
    Array(tasks.length).fill(false)
  );

  const handleTaskClick = (index) => {
    // creating new array to avoid messing up the original state
    const newTaskCompletion = [...taskCompletion];

    if (!newTaskCompletion[index]) {
      newTaskCompletion[index] = true;
      new Audio(line).play();
    } else {
      newTaskCompletion[index] = false;
      new Audio(erase).play();
    }

    setTaskCompletion(newTaskCompletion);
  };

  const handleDelete = (index) => {
    const updatedTaskes = [...tasks];
    updatedTaskes.splice(index);

    setTasks(updatedTaskes);
  };

  return (
    <>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="task-holder">
            <span
              className="task-label"
              style={{
                textDecoration: taskCompletion[index]
                  ? "line-through rgb(20, 158, 202)"
                  : "none",
              }}
            >
              <i
                className={`${
                  taskCompletion[index] ? "fa-solid" : "fa-regular"
                } fa-circle-check fa-lg task-complete me-3`}
                onClick={() => handleTaskClick(index)}
              ></i>
              {task.charAt(0).toUpperCase() + task.slice(1)}
            </span>
            <TaskSettings Delete={() => handleDelete(index)} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Task;

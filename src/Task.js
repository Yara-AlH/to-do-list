import { useState } from "react";
import "./Task.css";
import line from "./SFX/line.wav";
import erase from "./SFX/erase.wav";

function Task({ tasks }) {
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

  return (
    <>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className="task-holder"
            onClick={() => handleTaskClick(index)}
            style={{
              textDecoration: taskCompletion[index] ? "line-through" : "none",
            }}
          >
            {task.charAt(0).toUpperCase() + task.slice(1)}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Task;

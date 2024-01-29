import AddTask from "./AddTask.js";
import Task from "./Task.js";
import { useState } from "react";
import write from "./SFX/write.wav";

function Box() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    new Audio(write).play();
  };

  return (
    <div className="box">
      <div className="container">
        <Task tasks={tasks} setTasks={setTasks} addTask={addTask} />
        <AddTask onAddTask={addTask} />
      </div>
    </div>
  );
}

export default Box;

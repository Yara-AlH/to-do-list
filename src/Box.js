import AddTask from "./AddTask.js";
import Task from "./Task.js";
import { useState } from "react";
import write from "./SFX/write.wav";

function Box() {
  const [tasks, setTasks] = useState([]);
  const [btnIsVisible, setBtnIsVisible] = useState(true);
  const [editingIndex, setEditingIndex] = useState(null);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    new Audio(write).play();
  };

  return (
    <div className="box">
      <div className="container">
        <Task
          tasks={tasks}
          setTasks={setTasks}
          addTask={addTask}
          setBtnIsVisible={setBtnIsVisible}
          editingIndex={editingIndex}
          setEditingIndex={setEditingIndex}
        />
        <AddTask
          onAddTask={addTask}
          btnIsVisible={btnIsVisible}
          setBtnIsVisible={setBtnIsVisible}
          setEditingIndex={setEditingIndex}
        />
      </div>
    </div>
  );
}

export default Box;

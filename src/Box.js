import AddTask from "./AddTask.js";
import Task from "./Task.js";
import { useState, useEffect } from "react";
import write from "./SFX/write.wav";

function Box() {
  const [tasks, setTasks] = useState([]);
  const [btnIsVisible, setBtnIsVisible] = useState(true);
  const [editingIndex, setEditingIndex] = useState(null);

  const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    new Audio(write).play();

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  return (
    <div className="box">
      <div className="container box-container">
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

import { useState, useEffect } from "react";
import line from "./SFX/line.wav";
import erase from "./SFX/erase.wav";
import TaskSettings from "./TaskSettings";
import EditingForm from "./EditingForm";

function Task({
  tasks,
  setTasks,
  setBtnIsVisible,
  editingIndex,
  setEditingIndex,
}) {
  const [taskCompletion, setTaskCompletion] = useState(
    Array(tasks.length).fill(false)
  );

  const [editedTask, setEditedTask] = useState("");

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
    localStorage.setItem("taskCompletion", JSON.stringify(newTaskCompletion));
  };

  const handleDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);

    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  useEffect(() => {
    const storedCompletedTasks = localStorage.getItem("taskCompletion");
    const storedDeletedTasks = localStorage.getItem("tasks");
    if (storedCompletedTasks) {
      setTasks(JSON.parse(storedCompletedTasks));
      setTasks(JSON.parse(storedDeletedTasks));
    }
  }, [setTasks]);

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedTask(tasks[index]);
    setBtnIsVisible(true);
  };

  const handleEditChange = (event) => {
    setEditedTask(event.target.value);
  };

  const handleEditSubmit = (event, index) => {
    event.preventDefault();
    const updatedTasks = [...tasks];
    updatedTasks[index] = editedTask;
    setTasks(updatedTasks);
    setEditingIndex(null);

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleCancelClick = () => {
    setEditingIndex(null);
  };

  return (
    <div className="task">
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="task-holder">
            {editingIndex === index ? (
              <EditingForm
                change={handleEditChange}
                save={handleEditSubmit}
                cancel={handleCancelClick}
                index={index}
                editedTask={editedTask}
              />
            ) : (
              <li draggable>
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
                <TaskSettings
                  Delete={() => handleDelete(index)}
                  Edit={() => handleEdit(index)}
                />
              </li>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task;

// .charAt(0).toUpperCase() + task.slice(1)

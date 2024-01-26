import { useState } from "react";
import "./AddTask.css";
import Form from "./Form";

function AddTask({ onAddTask }) {
  const [btnIsVisible, setBtnIsVisible] = useState(true);

  const handleBtnClick = () => {
    setBtnIsVisible(false);
  };

  if (btnIsVisible) {
    return (
      <div className="addTask">
        <button className="btn  add-task-btn " onClick={handleBtnClick}>
          <i className="fa-solid fa-circle-plus"></i> ADD TASK
        </button>
      </div>
    );
  } else {
    return (
      <div className="addTask">
        <Form setBtnIsVisible={setBtnIsVisible} onAddTask={onAddTask} />
      </div>
    );
  }
}

export default AddTask;

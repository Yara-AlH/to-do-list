import Form from "./Form";

function AddTask({
  onAddTask,
  btnIsVisible,
  setBtnIsVisible,
  setEditingIndex,
}) {
  const handleBtnClick = () => {
    setBtnIsVisible(false);
    setEditingIndex(null);
  };

  if (btnIsVisible) {
    return (
      <div className="addTask mt-4">
        <button className="btn  add-task-btn " onClick={handleBtnClick}>
          <i className="fa-solid fa-circle-plus"></i> ADD TASK
        </button>
      </div>
    );
  } else {
    return (
      <div className="addTask mt-4">
        <Form setBtnIsVisible={setBtnIsVisible} onAddTask={onAddTask} />
      </div>
    );
  }
}

export default AddTask;

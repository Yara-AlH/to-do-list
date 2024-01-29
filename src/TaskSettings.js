function TaskSettings({ Delete }) {
  return (
    <div className="task-settings">
      <span className="btns">
        <span className="me-4 edit-btn">Edit</span>
        <span className="me-3 delete-btn" onClick={Delete}>
          Delete
        </span>
      </span>
    </div>
  );
}

export default TaskSettings;

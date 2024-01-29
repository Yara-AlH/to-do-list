function TaskSettings({ Delete, Edit }) {
  return (
    <div className="task-settings">
      <span className="btns">
        <span className="me-4 edit-btn" onClick={Edit}>
          Edit
        </span>
        <span className="me-3 delete-btn" onClick={Delete}>
          Delete
        </span>
      </span>
    </div>
  );
}

export default TaskSettings;

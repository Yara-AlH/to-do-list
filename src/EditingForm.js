function EditingForm({ change, save, cancel, index, editedTask }) {
  return (
    <div className="editing-form">
      <form key={index} onSubmit={(event) => save(event, index)}>
        <input
          className="form-control"
          type="text"
          value={editedTask}
          onChange={change}
          autoFocus
        ></input>
        <div className=" d-flex justify-content-end ">
          <button
            type="button"
            className="btn mt-3  fw-bold small cancel-button"
            onClick={cancel}
          >
            Cancel
          </button>
          <button type="submit" className="btn mt-3 btn-secondary fw-bold ">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditingForm;

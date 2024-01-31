import { useState } from "react";

function Form({ setBtnIsVisible, onAddTask }) {
  const [task, setTask] = useState("");

  const handleCancelBtnClick = () => {
    setBtnIsVisible(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTask(task);
    setBtnIsVisible(true);
  };

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  return (
    <div className="form">
      <form className="form-body" onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="form-control shadow-none  "
          placeholder="What are you working on?"
          required
          autoFocus
          onChange={handleChange}
        ></input>
        <div className=" d-flex justify-content-end ">
          <button
            type="button"
            className="btn  mt-5 fw-bold small cancel-button"
            onClick={handleCancelBtnClick}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-secondary  mt-5 fw-bold ">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;

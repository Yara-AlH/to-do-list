import Box from "./Box";

function ToDoList() {
  return (
    <div className="toDoList">
      <a
        href="https://github.com/Yara-AlH"
        target="_blank"
        rel="noreferrer"
        className="logo fs-5 m-2"
        title="Yara's Github"
      >
        YH
      </a>
      <h1 className="text-center m-5 mb-1">Quest Queue</h1>
      <div className="subhead mb-5 ">A To-Do list tracker</div>
      <Box />
    </div>
  );
}

export default ToDoList;

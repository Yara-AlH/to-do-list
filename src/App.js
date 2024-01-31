import { useState } from "react";
import ToDoList from "./ToDoList";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function App() {
  const [lighMode, setLightMode] = useState(false);

  const customStyles = {
    size: "40",
    sunColor: "white",
    moonColor: "#143e6a",
  };

  const toggleMode = () => {
    if (lighMode) {
      setLightMode(false);

      return;
    }

    setLightMode(true);
  };

  return (
    <div className="App" data-theme={lighMode ? "light" : "dark"}>
      <DarkModeSwitch
        checked={lighMode}
        onChange={toggleMode}
        size={customStyles.size}
        sunColor={customStyles.sunColor}
        moonColor={customStyles.moonColor}
        style={{ position: "absolute", top: "20", right: "30" }}
      />
      <ToDoList />
    </div>
  );
}

export default App;

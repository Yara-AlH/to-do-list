import { useState, useEffect } from "react";
import ToDoList from "./ToDoList";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function App() {
  const [lightMode, setLightMode] = useState(false);

  const customStyles = {
    size: "40",
    sunColor: "white",
    moonColor: "#143e6a",
  };

  const toggleMode = () => {
    // toggling booleans, instead of using if/else
    const newLightMode = !lightMode;
    setLightMode(newLightMode);
    localStorage.setItem("lightMode", JSON.stringify(newLightMode));
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("lightMode");
    if (storedTheme !== null) {
      setLightMode(JSON.parse(storedTheme));
    }
  }, []);

  return (
    <div className="App" data-theme={lightMode ? "light" : "dark"}>
      <DarkModeSwitch
        checked={lightMode}
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

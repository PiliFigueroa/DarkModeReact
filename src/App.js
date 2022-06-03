import { useState } from "react";
import "./App.css";
import { Login } from "./components/Login";
import { Switch } from "./components/Switch";

function App() {
  const initialTheme = localStorage.getItem("theme") || "dark";
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Agregar un nuevo valor
  // localStorage.setItem("nombre", "agustin");
  // localStorage.setItem("nombre2", "pilar");

  // Obtener valor del localStorage
  // console.log(localStorage.getItem("nombre"));

  return (
    <div className="App" data-theme={theme}>
      <Switch handleTheme={handleTheme} />
      <Login />
    </div>
  );
}

export default App;

import { useState } from 'react'
import './App.css';
import { Login } from './components/Login'
import { Switch } from './components/Switch'


function App() {
  const [theme, setTheme] = useState("light")
  const handleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
  }
  
  return (
    <div className="App" data-theme={theme}>
        <Switch handleTheme={handleTheme} />
        <Login />
      </div>
  );
}


export default App;

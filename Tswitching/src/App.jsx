import { useState } from 'react'
import './App.css'
import './index.css'

function App() {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }

  return (
    <>
      <div className={`container ${theme}`}>
        <h1>Theme switcher</h1>
        <button onClick={toggleTheme}>
          Toggle Theme
        </button>
      </div>
    </>
  )
}

export default App

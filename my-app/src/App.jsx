import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Button } from "rsuite";


function StartRecordButton() {
  return (
  <Button style={{width : '175px'}} color="red" appearance="primary">
    <h2>
      Start
    </h2>
  </Button>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.linkedin.com/in/rudra-parvate/" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Welcome to Speaker!</h1>
      <div className="card">
        <StartRecordButton/>
        <p>
          Click on the button above to begin your speech practice
        </p>
      </div>
      <p className="read-the-docs">
        Click on the React logo
      </p>      
      <div>
        <p className = "read-the-docs">
          Noah Cheng's real name is "Joe Jr."
        </p>
      </div>
    </>
  )
}

export default App

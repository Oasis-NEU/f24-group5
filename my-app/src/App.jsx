import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function StartRecordButton() {
  return (
  <button>
    <h2>
      Click to Start Recording
    </h2>
  </button>
  )
}

function AboutPage() {
  return (
    <>
      <div>
        <a href="https://www.linkedin.com/in/rudra-parvate/" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React?</h1>
      <div className="card">
        <StartRecordButton/>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the React logo to learn more about your favorite :)
      </p>      
      <div>
        <p className = "read-the-docs">
          Noah Cheng's real name is "Joe Jr."
        </p>
      </div>
    </>
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
      <h1>React?</h1>
      <div className="card">
        <StartRecordButton/>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
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

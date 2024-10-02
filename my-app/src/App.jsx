import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.google.com/search?q=rudra+parvate&client=firefox-b-1-d&sca_esv=17288cef834a1941&ei=rsT9Ztn4Ooeq5NoPk_3h-Qg&ved=0ahUKEwjZh5uT2_CIAxUHFVkFHZN-OI8Q4dUDCA8&uact=5&oq=rudra+parvate&gs_lp=Egxnd3Mtd2l6LXNlcnAiDXJ1ZHJhIHBhcnZhdGUyBRAhGKABMgUQIRigATIFECEYoAEyBRAhGKABMgUQIRigATIFECEYnwUyBRAhGJ8FMgUQIRifBTIFECEYnwUyBRAhGJ8FSIUlUI4FWNwicAR4ApABA5gB3AGgAaASqgEGMTAuOS4yuAEDyAEA-AEBmAIWoALoD6gCCsICBBAAGEfCAhYQLhiABBixAxjRAxhDGIMBGMcBGIoFwgILEAAYgAQYsQMYgwHCAggQABiABBixA8ICJRAuGIAEGLEDGNEDGEMYgwEYxwEYigUYlwUY3AQY3gQY4ATYAQHCAhYQABgDGLQCGOUCGOoCGIwDGI8B2AECwgIFEC4YgATCAg4QABiABBixAxiDARiKBcICDhAuGIAEGLEDGIMBGIoFwgIREC4YgAQYsQMY0QMYgwEYxwHCAg4QLhiABBixAxjRAxjHAcICFBAuGIAEGJcFGNwEGN4EGOAE2AEBwgIQEC4YgAQYsQMYQxiDARiKBcICChAAGIAEGEMYigXCAg4QLhiABBjHARiOBRivAcICCxAuGIAEGNEDGMcBwgIKEC4YgAQYQxiKBcICCBAuGIAEGLEDwgIfEC4YgAQYsQMYQxiDARiKBRiXBRjcBBjeBBjgBNgBAcICEBAuGIAEGNEDGEMYxwEYigXCAhMQLhiABBixAxhDGIMBGNQCGIoFwgINEC4YgAQYsQMYQxiKBcICEBAAGIAEGLEDGEMYgwEYigXCAg0QABiABBixAxhDGIoFwgIFEAAYgATCAisQLhiABBhDGIoFGJcFGNwEGN4EGOAEGPQDGPEDGPUDGPYDGPcDGPgD2AEBwgIHEC4YgAQYCsICCxAuGIAEGMcBGK8BwgIIEAAYFhgeGA_CAgsQABiABBiGAxiKBcICCBAAGIAEGKIEwgIIEAAYogQYiQXCAgYQABgWGB7CAggQLhgWGAoYHpgDAogGAZAGCLoGBggBEAEYFLoGBAgCGAqSBwYxMi44LjKgB5KWAg&sclient=gws-wiz-serp" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://www.linkedin.com/in/rudra-parvate/" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

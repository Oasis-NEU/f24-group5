// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Button } from "rsuite";
import Popup from 'reactjs-popup'
import Confetti from 'react-confetti-boom';


function Celebration() {
  return (
    <div>
      <h1>Congratulations!</h1>
      <Confetti
        x={0.5}
        y={0.1}
        particleCount={50}
        deg={270}
        shapeSize={8}
        spreadDeg={45}
        effectInterval={2}
        effectCount={30}
        colors={['#ff577f', '#ff884b', '#ffd384', '#fff9b0', '#3498db']}
      />
    </div>
  );
}


function StartRecordButton() {
  return (
  <Button style={{width : '175px'}} color="red" appearance="primary">
    <h2>
      Start
    </h2>
  </Button>
  )
}

function NonCookiesPopUp() {
  return (
    <div>
      <h4>LOOK HERE FIRST</h4>
            <Popup trigger=
                {<button> HERE </button>}
                position="bottom center"
                on="hover">
                <div>We don&apos;t use cookies, but we want you to click accept anyways</div>
                <button onClick={Celebration}>ACCEPT</button>
            </Popup>
    </div>
  )
}
  
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <NonCookiesPopUp/>
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
          Noah Chengs real name is Joe Jr.
        </p>
      </div>
    </>
  )
}

export default App

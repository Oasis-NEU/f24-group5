import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GetStarted from './GetStarted.jsx'
import './index.css'
import BasicTextFields from './GetStarted.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BasicTextFields />
  </StrictMode>,
)

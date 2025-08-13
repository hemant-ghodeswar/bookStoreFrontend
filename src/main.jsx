import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppData from './pages/FirstFile'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <AppData /> */}

  </StrictMode>,
)

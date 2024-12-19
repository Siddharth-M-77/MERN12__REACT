import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import InformationContext from './components/InformationContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InformationContext>
      <App />
    </InformationContext>
  </StrictMode>,
)

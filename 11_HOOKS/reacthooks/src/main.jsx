import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // StrictMode - Faz o useEffect ser chamado no momento que o componente é montado e desmontado.
  <StrictMode> 
    <App />
  </StrictMode>,
)

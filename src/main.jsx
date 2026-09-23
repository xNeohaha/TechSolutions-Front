import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <header className="cabecalho">
        <div className="logo">
          <h1>Anthony Pires de Araújo</h1>
        </div>
      </header>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
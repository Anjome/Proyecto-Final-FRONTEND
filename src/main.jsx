import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from '../src/components/App/App'
import { Layout } from './components/Layout/Layout'
import { Nosotros } from './pages/Nosotros/Nosotros'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < Nosotros />
  </StrictMode>,
)

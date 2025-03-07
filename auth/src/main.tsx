import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Auth from './auth.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Auth />
  </StrictMode>,
)

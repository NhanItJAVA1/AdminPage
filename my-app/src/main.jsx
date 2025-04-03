import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Admin from './AdminPage/Admin.jsx'
import Report from './DetailsReport/Report.jsx'

createRoot(document.getElementById('root')).render(
  <Report />
)

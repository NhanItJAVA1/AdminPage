import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Report from './DetailsReport/Report'
import Project from './pages/Project';
import Teams from './pages/Teams';
import Analytics from './pages/Analytics';
import Messages from './pages/Messages';
import Integrations from './pages/Intergations';
import Admin from './AdminPage/Admin';
function App() {
  const [count, setCount] = useState(0)
  return <Admin />;
}

export default App

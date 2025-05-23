import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { TaskProvider } from './contexts/TaskContext';
import './index.css'

createRoot(document.getElementById('root')).render(
  <TaskProvider>
    <App />
  </TaskProvider>,
)

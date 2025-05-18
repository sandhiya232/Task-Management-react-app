import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateTask from './pages/CreateTask';
import './App.css'

function App() {
const [tasks, setTasks] = useState([]);


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home tasks={tasks} setTasks={setTasks} />} />
        <Route path="/create" element={<CreateTask tasks={tasks} setTasks={setTasks} />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

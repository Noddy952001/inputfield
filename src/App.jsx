import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Pin} from "./components/Pin"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Pin/>
    </div>
  )
}

export default App

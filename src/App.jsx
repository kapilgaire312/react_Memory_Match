import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MemoryMatch from './components/MemoryMatch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MemoryMatch />
    </>
  )
}

export default App

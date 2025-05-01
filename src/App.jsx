import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { motion } from "motion/react"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-5xl font-bold underline bg-primary text-white">
        Hello world!
      </h1>
    </>
  )
}

export default App

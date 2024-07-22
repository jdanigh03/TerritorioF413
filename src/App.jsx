import { useState } from 'react'
import './App.css'
import Rutas from './Rutas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Rutas/>
    </>
  )
}

export default App

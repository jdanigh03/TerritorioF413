import { useState } from 'react'
import './App.css'
import Cabecera from './componentes/general/Cabecera'
import BarraNavegacion from './componentes/general/BarraNavegacion'
import RedesSociales from './componentes/general/RedesSociales'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cabecera/>
      <BarraNavegacion/>
      <RedesSociales/>
    </>
  )
}

export default App

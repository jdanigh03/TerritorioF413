import { useState } from 'react'
import './App.css'
import Cabecera from './componentes/general/Cabecera'
import BarraNavegacion from './componentes/general/BarraNavegacion'
import Footer from './componentes/general/Footer'
import Banner from './componentes/inicio/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cabecera/>
      <BarraNavegacion/>
      <br />
      <Banner/>
      <Footer/>
    </>
  )
}

export default App

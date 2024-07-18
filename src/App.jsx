import { useState } from 'react'
import './App.css'
import Cabecera from './componentes/general/Cabecera'
import BarraNavegacion from './componentes/general/BarraNavegacion'
import Footer from './componentes/general/Footer'
import Banner from './componentes/inicio/Banner'
import Publicaciones from './componentes/inicio/Publicaciones'
import SubirPublicaciones from './componentes/publicaciones/SubirPublicaciones'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cabecera/>
      <br />
      <BarraNavegacion/>
      <br />
      <Banner/>
      <Publicaciones/>
      {/* <SubirPublicaciones/> */}
      <Footer/>
    </>
  )
}

export default App

import React from 'react'
import Cabecera from '../general/Cabecera'
import BarraNavegacion from '../general/BarraNavegacion'
import DefinirMembresia from './DefinirMembresia'
import Footer from '../general/Footer'

const DefinirPantalla = () => {
  return (
    <>
        <Cabecera/>
        <br />
        <BarraNavegacion/>
        <DefinirMembresia/>
        <br/>
        <Footer/>
    </>
  )
}

export default DefinirPantalla
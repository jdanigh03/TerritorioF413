import React from 'react'
import Cabecera from '../general/Cabecera'
import BarraNavegacion from '../general/BarraNavegacion'
import VerificarMembresia from './VerificarMembresia'
import Footer from '../general/Footer'

const VerificarPantalla = () => {
  return (
    <>
    <Cabecera/>
    <br />
    <BarraNavegacion/>
    <VerificarMembresia/>
    <br />
    <Footer/>
    </>
  )
}

export default VerificarPantalla
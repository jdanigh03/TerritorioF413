import React from 'react'
import Cabecera from '../general/Cabecera'
import BarraNavegacion from '../general/BarraNavegacion'
import Banner from './Banner'
import Publicaciones from './Publicaciones'
import Ofertas from '../Ofertas/Ofertas'
import Footer from '../general/Footer'

const Inicio = () => {
  return (
    <>
    <Cabecera/>
    <br />
    <BarraNavegacion/>
    <br />
    <br />
    <Banner/>
    <Publicaciones/>
    <Ofertas/>
    <Footer/>
    </>
  )
}

export default Inicio
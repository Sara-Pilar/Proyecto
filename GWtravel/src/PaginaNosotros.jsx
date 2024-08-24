import React from 'react';
import CuerpoNosotros from './componentes/CuerpoNosotros'
import ValoresNosotros from './componentes/ValoresNosotros';
import Footer from './componentes/Footer';
import Puntos from './componentes/Puntos';

function PaginaNosotros(){
  return(
    <>
    <CuerpoNosotros/>
    <Puntos/>
    <ValoresNosotros/>
    <Puntos/>
    <Footer/>
    </>
  );
}
export default PaginaNosotros;
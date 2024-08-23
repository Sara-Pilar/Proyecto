import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './componentes/Menu.jsx'
import BannerInicio from "./componentes/BannerInicio.jsx";
import Redesflot from "./componentes/Redesflot.jsx";
import BienvenidaInicio from './componentes/BienvenidaInicio.jsx'
import Puntos from './componentes/Puntos.jsx'
import MapaInicio from './componentes/MapaInicio.jsx'
import MReservadosInicio from "./componentes/MreservadosInicio.jsx";
import ContactoInicio from './componentes/ContactoInicio.jsx'
import Footer from './componentes/Footer.jsx'
import EscrituraInicio from './componentes/EscrituraInicio.jsx'

function App(){
  return(
    <>
      <Menu/> 
      <BannerInicio/>
      <EscrituraInicio/>
      <Redesflot/>
      <BienvenidaInicio/>
      <Puntos/>
      <MapaInicio/>
      <Puntos/>
      <MReservadosInicio/>
      <Puntos/>
      <ContactoInicio/>
      <Footer/>
    </>
  )
}
export default App;
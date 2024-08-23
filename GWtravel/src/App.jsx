import { Fragment } from "react";
import Menu from './componentes/Menu.jsx'
import BannerInicio from "./componentes/BannerInicio.jsx";
import Redesflot from "./componentes/Redesflot.jsx";
import BienvenidaInicio from './componentes/BienvenidaInicio.jsx'
import Puntos from './componentes/Puntos.jsx'
import MapaInicio from './componentes/MapaInicio.jsx'
import MReservados from "./componentes/Mreservados.jsx";


function App(){
  return(
    <>
      <Menu/> 
      <BannerInicio/>
      <Redesflot/>
      <BienvenidaInicio/>
      <Puntos/>
      <MapaInicio/>
      <Puntos/>
      <MReservados/>
    </>
  )
}
export default App;
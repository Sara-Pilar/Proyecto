import { Fragment } from "react";
import Menu from './componentes/Menu'
import CuerpoDestino from "./componentes/CuerpoDestino";
import Footer from './componentes/Footer'

function destino(){
    return(
        <>
            <Menu/>
            <CuerpoDestino/>
            <Footer/>
        </>
    )
}

export default destino;
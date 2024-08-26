import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './componentes/Menu.jsx'
import PaginaInicio from './PaginaInicio.jsx'
import PaginaNosotros from './PaginaNosotros.jsx'
import PaginaSelva from './PaginaSelva.jsx'
import PaginaTestimonios from './PaginaTestimonios.jsx'
import Footer from "./componentes/Footer.jsx";
import PaginaBlog from './PaginaBlog.jsx'
import PaginaDestino from './PaginaDestino.jsx'
import PaginaCosta from "./PaginaCosta.jsx";
import PaginaLima from './PaginaLima.jsx'
import PaginaParacas from "./PaginaParacas.jsx";

function App(){
  return(
    <>
      
      <Router>
        <Menu/>
        <Routes>
          <Route path="/" element={<PaginaInicio/>} />
          <Route path="/PaginaNosotros" element={<PaginaNosotros/>} />
          <Route path="/PaginaSelva" element={<PaginaSelva/>} />
          <Route path="/PaginaTestimonios" element={<PaginaTestimonios/>} />
          <Route path="/PaginaBlog" element={<PaginaBlog/>} />
          <Route path="/PaginaDestino" element={<PaginaDestino/>} />
          <Route path="/PaginaCosta" element={<PaginaCosta/>} />
          <Route path="/PaginaLima" element={<PaginaLima/>} />
          <Route path="/PaginaParacas" element={<PaginaParacas/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}
export default App;
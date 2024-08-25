import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './componentes/Menu.jsx'
import PaginaInicio from './PaginaInicio.jsx'
import PaginaNosotros from './PaginaNosotros.jsx'
import PaginaSelva from './PaginaSelva.jsx'
import PaginaTestimonios from './PaginaTestimonios.jsx'
import Footer from "./componentes/Footer.jsx";

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
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}
export default App;
import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './componentes/Menu.jsx'
import PaginaInicio from './PaginaInicio.jsx'
import PaginaNosotros from './PaginaNosotros.jsx'

function App(){
  return(
    <>
      
      <Router>
        <Menu/>
        <Routes>
          <Route path="/" element={<PaginaInicio/>} />
          <Route path="/PaginaNosotros" element={<PaginaNosotros/>} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
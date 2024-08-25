import React from 'react';
import Puntos from './componentes/Puntos.jsx'
import Selva1 from './componentes/Selva_parte1.jsx';
import './componentes/Region_selva.css'
import Selva2 from './componentes/Selva_parte2.jsx';
function PaginaSelva() {

  return (
    <div>
      <Selva1/>
      <Selva2/>
    </div>
  );
}

export default PaginaSelva;
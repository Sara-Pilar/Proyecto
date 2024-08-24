import React from 'react';
import '../componentes/EstilosNosotros.css';
// Datos de ejemplo
const valores = [
  { title: 'Calidad', imgSrc: '/path/to/image1.png' },
  { title: 'Seguridad', imgSrc: '/path/to/image2.png' },
  { title: 'Garantía', imgSrc: '/path/to/image3.png' }
];

function ValoresNosotros() {
  return (
    <>
        <h1 className="pilaresTit">NUESTROS VALORES</h1>
        <div className="pilares">
            {valores.map((valor, index) => (
            <figcaption key={index}>
                <h2>{valor.title}</h2>
                <img src={valor.imgSrc} alt={valor.title} />
            </figcaption>
            ))}
        </div>
    </>
  );
}

export default ValoresNosotros;
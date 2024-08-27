import { Fragment, useState } from "react";
import { Form } from 'react-bootstrap';
import '../EstiloContactanos.css';


const EfectoContacto = () => {
    const [Nombres, setNombres] = useState('');
    const [Telefono, setTelefono] = useState('');
    const [Correo, setCorreo] = useState('');
    const [Presupuesto, setPresupuesto] = useState('');
    const [Destino, setDestino] = useState('');
    const [Salida, setSalida] = useState('');
    const [Retorno, setRetorno] = useState('');

    const regexTexto = /^[a-zA-ZÁÉÍÓÚñ\s]+$/;
    const regexNumero = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/;
   
    const realizarEnvio = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (Nombres === '' || Telefono === '' || Correo === '' || Presupuesto === '' || Destino === '' || Salida === '' || Retorno === '') {
            alert('Las cajas de texto están vacías');
        } else if ((regexTexto.test(Nombres) === false && Nombres !== '') || 
                   (regexNumero.test(Telefono) === false && Telefono !== '') || 
                   (regexTexto.test(Correo) === false && Correo !== '') || 
                   (regexTexto.test(Presupuesto) === false && Presupuesto !== '') || 
                   (regexTexto.test(Destino) === false && Destino !== '') || 
                   (regexTexto.test(Retorno) === false && Retorno !== '')) {
            alert('Los datos son inválidos');
        } else {
            alert(`Datos ingresados: { Nombres: ${Nombres}, Teléfono: ${Telefono}, Correo: ${Correo}, Presupuesto: ${Presupuesto}, Destino: ${Destino}, Salida: ${Salida}, Retorno: ${Retorno} }`);
        }

        setErrors(newErrors);
    }

    const cambioNombres = (e) => setNombres(e.target.value);
    const cambioTelefono = (e) => setTelefono(e.target.value);
    const cambioCorreo = (e) => setCorreo(e.target.value);
    const cambioPresupuesto = (e) => setPresupuesto(e.target.value);
    const cambioDestino = (e) => setDestino(e.target.value);
    const cambioSalida = (e) => setSalida(e.target.value);
    const cambioRetorno = (e) => setRetorno(e.target.value);

    return (
        <>
            <Form.Group className="form-group">
           <Form.Label className="w-b">Nombres y apellidos:</Form.Label>
         <Form.Control id="name" type="text" placeholder="Nombres y apellidos"   required value={nombre} onChange={cambioNombres}/>
     </Form.Group>

     <Form.Group className="form-group">
           <Form.Label className="w-b" >Telefono:</Form.Label>
          <Form.Control type="text" placeholder="Telefono " required value={correo} onChange={cambioTelefono}/>
     </Form.Group>

     <Form.Group className="form-group">
        <Form.Label className="w-b" >Correo</Form.Label>
        <Form.Control as="textarea" placeholder="Correo " required value={contenido} onChange={cambioCorreo}/>
     </Form.Group>
  
     <Form.Group className="form-group">
        <Form.Label className="w-b" >Presupuesto</Form.Label>
        <Form.Control as="textarea" placeholder="Presupuesto " required value={contenido} onChange={cambioPresupuesto}/>
     </Form.Group>

     <Form.Group className="form-group">
        <Form.Label className="w-b" >Destino</Form.Label>
        <Form.Control as="textarea" placeholder="Destino " required value={contenido} onChange={cambioDestino}/>
     </Form.Group>

     <Form.Group className="form-group">
        <Form.Label className="w-b" >Salida</Form.Label>
        <Form.Control as="textarea" placeholder="Salida " required value={contenido} onChange={cambioSalida}/>
     </Form.Group>

     <Form.Group className="form-group">
        <Form.Label className="w-b" >Retorno</Form.Label>
        <Form.Control as="textarea" placeholder="Retorno " required value={contenido} onChange={cambioRetorno}/>
     </Form.Group>

     <div className="banner">
                <img id="banner-js" src="https://w0.peakpx.com/wallpaper/424/854/HD-wallpaper-saint-mary-s-lake-wild-goose-island-montana-grass-clouds-green-montana-land-saint-blue-marys-forest-sky-trees-lake-daylight-water-mountains-evergreens-day-wild-goose-island-nature.jpg" alt="Banner Image" />
                <div className="Titulo">
                    <h1>CONTÁCTANOS</h1>
                </div>
            </div>
            <section className="Formulario">
                <form className="Name-Last">
                    <input type="text" placeholder="Nombre y Apellidos." required />
                </form>
                <form className="Num-Correo">
                    <input type="text" placeholder="Teléfono/WhatsApp" required />
                    <input type="email" placeholder="Correo Electrónico" required />
                </form>
                <form className="Hotel-Presu">
                    <input type="text" placeholder="Categoría Hotel:" required />
                    <input type="text" placeholder="Presupuesto" required />
                </form>
                <form className="Pie">
                    <input type="text" placeholder="Destino" required />
                    <input type="text" placeholder="Salida" required />
                    <input type="text" placeholder="Retorno" required />
                </form>
                <form className="Mensaje">
                    <input type="text" placeholder="Escribir Detalles" />
                </form>
            </section>



        </>


    );
}

export default EfectoContacto;

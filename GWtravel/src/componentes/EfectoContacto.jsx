import { Fragment, useState } from "react";
import { Form, Button } from 'react-bootstrap';

const EfectoContacto = () => {
    const   [Nombres, setNombres] = useState('');
    const   [Telefono, setTelefono] = useState('');
    const   [Correo, setCorreo] = useState('');
    const   [Presupuesto, setPresupuesto] = useState('');
    const   [Destino, setDestino] = useState('');
    const   [Salida, setSalida] = useState('');
    const   [Retorno, setRetorno] = useState('');
    const   [errors, setErrors] = useState({});

    const regexTexto = /^[a-zA-ZÁÉÍÓÚñ\s]+$/;
    const regexNumero = /^[0-9]{1,9}$/;


    const realizarEnvio = (e) => {
        e.preventDefault();
     const newErrors ={};
     if(!Nombres)   newErrors.Nombres= 'Nombres y Apellidos Obligatorios';  
     if(!Telefono)   newErrors.Telefono= 'Telefono Obligatorio';
     if(!Correo)   newErrors.Correo= 'Correo Obligatorio';
     if(!Presupuesto)   newErrors.Presupuesto= 'Presupuesto Opcional';
     if(!Destino)   newErrors.Destino='Destino Obligatorio';
     if(!Salida)   newErrors.Salida='Ingresar Salida';
     if(!Retorno)   newErrors.Retorno='Ingresar Retorno';
       
     
     /*Validaciones*/ 
     if(!regexNumero.test(Telefono))    {alert('Numero Incorrecto')}
     if(!regexTexto.test(Nombres))    {alert('Nombres y Apellidos incorrecto')}
     if(!regexTexto.test(Correo))    {alert('Nombres y Apellidos incorrecto')}
     if(!regexTexto.test(Presupuesto))    {alert('Identifacion incorrecta')}
     if(!regexTexto.test(Destino))    {alert('Validacion incorrecta')}
     if(!regexTexto.test(Salida))    {alert(' Validacion incorrecta')}
     if(!regexTexto.test(Retorno))    {alert('Validacion incorrecta')}

     
     
     setErrors(newErrors);
        alert('Datos Ingresados: { ${Nombres}, ${Telefono}, ${Correo}, ${Presupuesto}, ${Destino}, ${Salida}, ${Retorno}')
    }

  const cambioNombres = (e) =>      setNombres(e.target.value);
  const cambioTelefono = (e) =>     setTelefono(e.target.value);
  const cambioCorreo = (e) =>       setCorreo(e.target.value);
  const cambioPresupuesto = (e) =>  setPresupuesto(e.target.value);
  const cambioDestino =(e) =>       setDestino(e.target.value);
  const cambioSalida =(e) =>        setSalida(e.target.value);
  const cambioRetorno =(e) =>       setRetorno(e.target.value);

    
    
    return ( 
    <>
    <Form  onSubmit={realizarEnvio} >
        <Form.Group>
            <Form.Label>  Formulario de Datos  </Form.Label>
            <Form.Control type="text"  value={Nombres}  onChange=(cambioNombres)    placeholder="Nombres y Apellidos"></Form.Control>
        |   <Form.Control type="text"  value={Telefono}  onChange=(cambioTelefono)   placeholder="Telefono-WhatSapp"></Form.Control>
            <Form.Control type="text"  value={Correo}     onChange=(cambioCorreo)  placeholder="Correo Electronico"></Form.Control>
            <Form.Control type="text"  value={Presupuesto} onChange=(cambioPresupuesto)  placeholder="Presupuesto"></Form.Control>
            <Form.Control type="text"  value={Destino}     onChange=(cambioDestino) placeholder="Destino"></Form.Control>
            <Form.Control type="text"  value={Salida}     onChange=(cambioSalida)  placeholder="Salida"></Form.Control>
            <Form.Control type="text"  value={Retorno}   onChange=(cambioRetorno)   placeholder="Retorno"></Form.Control>
        </Form.Group>
        <Button variant="info" type="submit"     > Validar datos </Button>
    </Form>
    </>
  );
}

export default EfectoContacto;

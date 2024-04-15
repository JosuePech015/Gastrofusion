import React, { Fragment, useEffect, useState } from 'react';
import ClienteAxios from '../../config/axios';
//Falta una libreria?
function NuevoProveedor (){
    // const[carrera, guardarCarrera] = useState([]);
    // //Este metodo consulta la URL alumnos que se tiene en  el localhost del servidor (8888)
    // const ConsultarAPI = async () => {
    //     const CarreraConsulta = await ClienteAxios.get('/carrera');
    //     //COLOCAR STATE
    //     guardarCarrera(CarreraConsulta.data);
    //     console.log(carrera)
    // }
    // useEffect (() => { //Evento que se dispara al servicioque funciona solo en el componente
    //     ConsultarAPI();
    // },[]);

//case del 29 de febrero
    const [proveedores, guardarProveedor] =useState({
        action: 'insert',
        Id: '',
        Nombre:'',
        Direction:'',
        Contact:'',
    });
    
    const actualizarState = e=>{

        console.log(e.target.value);
        guardarProveedor({
            ...proveedores,
            [e.target.name] : e.target.value
        })
    }

const validarProveedor = ()=>{
    const{Nombre,Direction,Contact} = proveedores;
    let valido = !Nombre.length || !Direction.length || !Contact.length;
    return valido;
}

const AgregarProveedor =  e => {
    e.preventDefault();
    ClienteAxios.post('/proveedor', proveedores) //este alumno es el objeto de useState alumno
    .then(res=>{
        alert("Proveedor Guardado");
        window.location.reload(); //Tarea del 01 de Marzo se hizo la alerta
        console.log(res)
    })
}

    return (
        <Fragment>
<h2>Nuevos Proveedores</h2>
        <form onSubmit={AgregarProveedor}>
    
        <div className="campo">
            <label>Nombre:</label>
            <input type="text" placeholder="Nombre Proveedor" 
            name="Nombre"
            onChange={actualizarState}/>
        </div>
    
        <div className="campo">
            <label>Direccion:</label>
            <input type="text" placeholder="Direction Proveedor" 
            name="Direction"
            onChange={actualizarState}/>
        </div>
    
        {/* <div className="campo">
            <label>Carrera:</label>
            <select name= "carrera" onChange={actualizarState}>
            <option value="">Seleccione una carrera</option>
            {carrera.map(carrera =>
                <option value={carrera.UNCR_ID}>{carrera.UNCR_CARRERA}</option>
            )}
            </select>
        </div> */}
    
        <div className="campo">
            <label>Contacto:</label>
            <input type="Contact" placeholder="Contacto Proveedor" name="Contact" onChange={actualizarState}/>
        </div>

        <div class="enviar">
                <input type="submit" class="btn btn-azul" 
                value="Agregar Proveedor" 
                disabled={validarProveedor()}/>
        </div>

        </form>

        </Fragment>
    )
}
export default NuevoProveedor;
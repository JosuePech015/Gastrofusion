import React, { Fragment, useEffect, useState } from 'react';
import ClienteAxios from '../../config/axios';
//Falta una libreria?
function NuevoAlimentos (){
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
    const [alimentos, guardarAlimentos] =useState({
        action: 'insert',
        Id: '',
        Nombre:'',
        Descripcion:'',
        Precio:'',
    });
    
    const actualizarState = e=>{

        console.log(e.target.value);
        guardarAlimentos({
            ...alimentos,
            [e.target.name] : e.target.value
        })
    }

const validarAlimentos = ()=>{
    const{Nombre,Descripcion,Precio} = alimentos;
    let valido = !Nombre.length || !Descripcion.length || !Precio.length;
    return valido;
}

const AgregarAlimentos =  e => {
    e.preventDefault();
    ClienteAxios.post('/alimentos', alimentos) //este alumno es el objeto de useState alumno
    .then(res=>{
        alert("Alimentos Guardado");
        window.location.reload(); //Tarea del 01 de Marzo se hizo la alerta
        console.log(res)
    })
}

    return (
        <Fragment>
<h2>Nuevos alimentos</h2>
        <form onSubmit={AgregarAlimentos}>
    
        <div className="campo">
            <label>Nombre:</label>
            <input type="text" placeholder="Nombre Alimento" 
            name="Nombre"
            onChange={actualizarState}/>
        </div>
    
        <div className="campo">
            <label>Descripcion:</label>
            <input type="text" placeholder="Descripcion Alimento" 
            name="Descripcion"
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
            <label>Precio:</label>
            <input type="Precio" placeholder="Precio Alimento" name="Precio" onChange={actualizarState}/>
        </div>

        <div class="enviar">
                <input type="submit" class="btn btn-azul" 
                value="Agregar Alimento" 
                disabled={validarAlimentos()}/>
        </div>

        </form>

        </Fragment>
    )
}
export default NuevoAlimentos;
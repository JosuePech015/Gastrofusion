import React, { Fragment, useEffect, useState } from 'react';
import ClienteAxios from '../../config/axios';
import { useParams } from 'react-router-dom';
//Falta una libreria?
function EditarAlimento (){
    // const[editaralimento, guardareditaralimento] = useState([]);
    //Este metodo consulta la URL alumnos que se tiene en  el localhost del servidor (8888)
    const ConsultarAPI = async () => {
    const AlimentosConsulta =await ClienteAxios.get('/alimentos/'+params.id+'');
         //COLOCAR STATE
         guardareditaralimento(AlimentosConsulta.data[0]);
         console.log(alimento)
     }
     useEffect (() => { //Evento que se dispara al servicioque funciona solo en el componente
         ConsultarAPI();
     },[]);

    let params = useParams();
    console.log(params.id);

//case del 29 de febrero
    const [alimento, guardareditaralimento] =useState({
        action: 'update',
        nombre:'',
        descripcion:'',
        precio:'',
        id:''+params.id+''
    });
    
    const actualizarState = e=>{

        console.log(e.target.value);
        guardareditaralimento({
            ...alimento,
            [e.target.name] : e.target.value
        })
    }

const validarAlimentos = ()=>{
    const{nombre,descripcion,precio} = alimento;
    let valido = !nombre.length || !descripcion.length || !precio.length;
    return valido;
}

const EditarAlimentos =  e => {
    e.preventDefault();
    ClienteAxios.post('/alimentos', alimento) //este alumno es el objeto de useState alumno
    .then(res=>{
        alert("Alimentos Editado");
        //window.location.reload(); //Tarea del 01 de Marzo se hizo la alerta
        console.log(res)
    });
}

    return (
        <Fragment>
<h2>Editar alimentos</h2>
        <form onSubmit={EditarAlimentos}>
    
        <div className="campo">
            <label>Nombre:</label>
            <input type="text" placeholder="Nombre Alimento" 
            name="nombre"
            onChange={actualizarState}
            value={alimento.nombre}/>
        </div>
    
        <div className="campo">
            <label>Descripcion:</label>
            <input type="text" placeholder="Descripcion Alimento" 
            name="descripcion"
            onChange={actualizarState}
            value={alimento.descripcion}/>
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
            <input type="Precio" placeholder="Precio Alimento" name="precio" onChange={actualizarState} value={alimento.precio}/>
        </div>

        <div class="enviar">
                <input type="submit" class="btn btn-azul" 
                value="Editar Alimento" 
                />
        </div>

        </form>

        </Fragment>
    )
}
export default EditarAlimento;
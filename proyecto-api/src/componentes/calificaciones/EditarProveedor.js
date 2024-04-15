import React, { Fragment, useEffect, useState } from 'react';
import ClienteAxios from '../../config/axios';
import { useParams } from 'react-router-dom';
//Falta una libreria?
function EditarProveedor (){
    // const[editaralimento, guardareditaralimento] = useState([]);
    //Este metodo consulta la URL alumnos que se tiene en  el localhost del servidor (8888)
    const ConsultarAPI = async () => {
    const ProveedoresConsulta =await ClienteAxios.get('/proveedor/'+params.id+'');
         //COLOCAR STATE
         guardareditarproveedor(ProveedoresConsulta.data[0]);
         console.log(proveedor)
     }
     useEffect (() => { //Evento que se dispara al servicioque funciona solo en el componente
         ConsultarAPI();
     },[]);

    let params = useParams();
    console.log(params.id);

//case del 29 de febrero
    const [proveedor, guardareditarproveedor] =useState({
        action: 'update',
        nombre:'',
        direction:'',
        contact:'',
        id:''+params.id+''
    });
    
    const actualizarState = e=>{
        console.log(e.target.value);
        guardareditarproveedor({
            ...proveedor,
            [e.target.name] : e.target.value
        })
    }

const validarAlimentos = ()=>{
    const{nombre,direction,contact} = proveedor;
    let valido = !nombre.length || !direction.length || !contact.length;
    return valido;
}

const EditarProveedor =  e => {
    e.preventDefault();
    ClienteAxios.post('/proveedor', proveedor) //este alumno es el objeto de useState alumno
    .then(res=>{
        alert("Alimentos Editado");
        //window.location.reload(); //Tarea del 01 de Marzo se hizo la alerta
        console.log(res)
    });
}

    return (
        <Fragment>
<h2>Editar alimentos</h2>
        <form onSubmit={EditarProveedor}>
    
        <div className="campo">
            <label>Nombre:</label>
            <input type="text" placeholder="Nombre Alimento" 
            name="nombre"
            onChange={actualizarState}
            value={proveedor.nombre}/>
        </div>
    
        <div className="campo">
            <label>Direccion:</label>
            <input type="text" placeholder="Descripcion Alimento" 
            name="direction"
            onChange={actualizarState}
            value={proveedor.direction}/>
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
            <input type="text" placeholder="Precio Alimento" name="contact" onChange={actualizarState} value={proveedor.contact}/>
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
export default EditarProveedor;
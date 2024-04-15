import React,{Fragment, useEffect, useState} from'react';
import ClienteAxios from '../../config/axios'; 
import {Link} from 'react-router-dom';

function Proveedor(){
    const[proveedores, guardarProveedor] = useState([]);
    //Este metodo consulta la URL alumnos que se tiene en  el loalhost del servidor (8888)


    const ConsultarAPI = async () => {
        const ProveedorConsulta = await ClienteAxios.get('/proveedor');
        //COLOCAR STATE
        guardarProveedor(ProveedorConsulta.data);
        console.log(proveedores) //;
    }
    useEffect (() => { //Evento que se dispara al servicioque funciona solo en el componente
        ConsultarAPI();
    },[]);

    //Clase de 01 de Marzo 
    const deleteProveedor = async (id) =>{
        try{
            const response =await ClienteAxios.delete('/proveedor/'+id+'');
            alert("Proveedor Eliminado")
            window.location.reload();
        }
            catch(error){
                console.log(error);
            }      
    };
    return(

        <Fragment>
          <h2>Proveedores</h2>  
            <Link to={"/nuevo-proveedor"} class="btn btn-verde nvo-alimentos"> <i class="fas fa-plus-circle"></i>
                Nuevo Proveedor
            </Link>
       {/* //Clase nueva del 27 de febrero se agregó esto de HTML  */}
        <ul class="listado-proveedor">
            {proveedores.map(proveedor =>
                <li class="alimentos">
                <div class="info-alumno">
                    <p class="nombre">Nombre: {proveedor.Nombre}</p>
                    <p class="descripcion"> Descripcion: {proveedor.Direction}</p>
                    <p class="precio">Contacto: {proveedor.Contact}</p>
                </div>
                <div class="acciones">
                <Link to = {"/editar-proveedores/" + proveedor.Id} class="btn btn-azul">
                        <i class="fas fa-pen-alt"></i>
                        Editar Proveedor
                    </Link>
                    <button type="button" class="btn btn-rojo btn-eliminar"
                    onClick={() => deleteProveedor(proveedor.Id)}> 
                        <i class="fas fa-times"></i>
                        Eliminar Proveedor
                    </button>
                </div>
            </li>               
        )}
        </ul>
        </Fragment>
    )
}
export default Proveedor;
// {alumno.uncr_carrera}
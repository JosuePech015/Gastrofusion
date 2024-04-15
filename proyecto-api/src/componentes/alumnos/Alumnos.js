import React,{Fragment, useEffect, useState} from'react';
import ClienteAxios from '../../config/axios'; 
import {Link} from 'react-router-dom';

function Alimentos(){
    const[alimentos, guardarAlimentos] = useState([]);
    //Este metodo consulta la URL alumnos que se tiene en  el loalhost del servidor (8888)


    const ConsultarAPI = async () => {
        const AlimentosConsulta = await ClienteAxios.get('/alimentos');
        //COLOCAR STATE
        guardarAlimentos(AlimentosConsulta.data);
        console.log(alimentos) //;
    }
    useEffect (() => { //Evento que se dispara al servicio que funciona solo en el componente
        ConsultarAPI();
    },[]);

    //Clase de 01 de Marzo 
    const deleteAlimentos = async (id) =>{
        try{
            const response =await ClienteAxios.delete('/alimentos/'+id+'');
            alert("Alimento Eliminado")
            window.location.reload();
        }
            catch(error){
                console.log(error);
            }      
    };
    return(

        <Fragment>
          <h2>Alimentos</h2>  
            <Link to={"/nuevo-alimento"} class="btn btn-verde nvo-alimentos"> <i class="fas fa-plus-circle"></i>
                Nuevo alimentos
            </Link>
       {/* //Clase nueva del 27 de febrero se agregó esto de HTML  */}
        <ul class="listado-alimentos">
            {alimentos.map(alimento =>
                <li class="alimentos">
                <div class="info-alumno">
                    <p class="nombre">Nombre: {alimento.Nombre}</p>
                    <p class="descripcion"> Descripcion: {alimento.Descripcion}</p>
                    <p class="precio">Precio: {alimento.Precio}</p>
                </div>
                <div class="acciones">
                    <Link to = {"/editar-alimentos/" + alimento.Id} class="btn btn-azul">
                        <i class="fas fa-pen-alt"></i>
                        Editar Alimento
                    </Link>
                    <button type="button" class="btn btn-rojo btn-eliminar"
                    onClick={() => deleteAlimentos(alimento.Id)}> 
                        <i class="fas fa-times"></i>
                        Eliminar Alimento
                    </button>
                </div>
            </li>               
        )}
        </ul>
        </Fragment>
    )
}
export default Alimentos;
// {alumno.uncr_carrera}
import React,{Fragment, useEffect, useState} from'react';
import ClienteAxios from '../../config/axios'; 
import {Link} from 'react-router-dom';

function Tipos(){
    const[tipos, guardarTipo] = useState([]);
    //Este metodo consulta la URL alumnos que se tiene en  el loalhost del servidor (8888)


    const ConsultarAPI = async () => {
        const TipoConsulta = await ClienteAxios.get('/tipo');
        //COLOCAR STATE
        guardarTipo(TipoConsulta.data);
        console.log(tipos) //;
    }
    useEffect (() => { //Evento que se dispara al servicio que funciona solo en el componente
        ConsultarAPI();
    },[]);

    //Clase de 01 de Marzo 
    const deleteAlimentos = async (id) =>{
        try{
            const response =await ClienteAxios.delete('/tipo/'+id+'');
            alert("Tipo de Alimento Eliminado")
            window.location.reload();
        }
            catch(error){
                console.log(error);
            }      
    };
    return(

        <Fragment>
          <h2>Tipos</h2>  
            <Link to={"/nuevo-alimento"} class="btn btn-verde nvo-alimentos"> <i class="fas fa-plus-circle"></i>
                Nuevos Tipos De Alimentos
            </Link>
       {/* //Clase nueva del 27 de febrero se agregó esto de HTML  */}
        <ul class="listado-tipo">
            {tipos.map(tipo =>
                <li class="alimentos">
                <div class="info-alumno">
                    <p class="nombre">Nombre: {tipo.Nombre}</p>
                </div>
                <div class="acciones">
                        {/* <Link to={"/editar-alimentos/" + tipo.PkTipo} class="btn btn-azul">
                            <i class="fas fa-pen-alt"></i>
                            Editar Alimento
                        </Link> */}
                    <button type="button" class="btn btn-rojo btn-eliminar"
                    onClick={() => deleteAlimentos(tipo.PkTipo)}> 
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
export default Tipos;
// {alumno.uncr_carrera}
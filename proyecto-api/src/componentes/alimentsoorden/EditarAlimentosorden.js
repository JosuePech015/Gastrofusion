import React, { Fragment, useEffect, useState } from 'react';
import ClienteAxios from '../../config/axios';
import { useParams } from 'react-router-dom';

function EditarAlimentosorden(){
    
    let params = useParams();
    console.log(params.id);

    const[tipos, guardarCliente] =useState ([]);
    const [alimentosorden, guardareditarPedido] = useState({
        action :'update',
        tipo:'',
        nombreplatillo:'',
        precio:'',
        ingrediente:'',
        id:''+params.id+''    
    });

    const ConsultarAPI = async() => {
        const ClienteConsulta = await ClienteAxios.get('/tipo');
        const PedidoConsulta = await ClienteAxios.get('/alimentosorden/'+params.id+'');
    
        guardarCliente(ClienteConsulta.data);
        guardareditarPedido(PedidoConsulta.data[0]);
    }
    useEffect ( ()=>{
        ConsultarAPI();
    },[]);

    const actualizarState = e =>{
        console.log(e.target.value);
        guardareditarPedido({
            ...alimentosorden,
            [e.target.name]: e.target.value
        })
    }

    const ModificarPedido = e =>{
        e.preventDefault();
        ClienteAxios.post('/alimentosorden', alimentosorden).then(res=>{
            console.log(res)  

            alert("Pedido Modificado");
            // window.location.reload();
        });
    }

    const validarPedido = ()=>{
        const{tipo,nombreplatillo,precio,ingrediente} = alimentosorden;
        let valido = !tipo.length || !nombreplatillo.length || !precio.length || !ingrediente.length;
        return valido;
    }

    return (
        <Fragment>
        <h2>Editar Pedido</h2>
        
            <form onSubmit={(ModificarPedido)}>
                <legend>Llena todos los campos</legend>
            
                <div className="campo">
                    <label>Tipo:</label>
                    <select name="tipo" onChange={actualizarState}>
                        {tipos.map(tipo=>
                            <option value={tipo.PkTipo} selected={tipo.PkTipo === alimentosorden.tipo}>
                                {tipo.Nombre}
                            </option>
                        )}
                    </select>
                </div>

                {/* <div class="campo">
                    <label>Fecha:</label>
                    <input type="date" placeholder="Fecha Pedido" name="fechapedido" onChange={actualizarState} value={pedido.fechapedido ? pedido.fechapedido.slice(0, 10) : ''} />
                </div> */}

                <div className="campo">
                    <label>Nombre del platillo:</label>
                    <input type="text" placeholder="Fecha de pedido" name="nombreplatillo" onChange={actualizarState} value={alimentosorden.NombrePlatillo}/>
                </div>

                <div className="campo">
                    <label>Precio:</label>
                    <input type="text" placeholder="Fecha de pedido" name="precio" onChange={actualizarState} value={alimentosorden.Precio}/>
                </div>

                <div className="campo">
                    <label>Ingredientes:</label>
                    <input type="text" placeholder="Fecha de pedido" name="ingrediente" onChange={actualizarState} value={alimentosorden.Ingrediente}/>
                </div>


                {/* <div class="campo">
                    <label>Estado</label>

                    <select name="estado" onChange={actualizarState}>
                        <option value="Enviado" selected={pedido.estado === "Enviado"}>Enviado</option>
                        <option value="En proceso" selected={pedido.estado === "En proceso"}>En proceso</option>
                        <option value="Entregado" selected={pedido.estado === "Entregado"}>Entregado</option>
                    </select>

                </div> */}

                <div class="enviar">
                        <input type="submit" class="btn btn-azul" value="Actualizar Información Pedido"/>
                </div>

            </form>
        </Fragment>
    )
}
export default EditarAlimentosorden;
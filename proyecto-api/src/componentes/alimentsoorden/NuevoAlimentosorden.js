import React, { Fragment, useEffect, useState } from 'react';
import PedidoAxios from '../../config/axios';

function NuevoAlimentosOrdenes(){
    
    const[tipos, guardarCliente] =useState ([]);
    const ConsultarAPI = async() => {
        const ClienteConsulta = await PedidoAxios.get('/tipo');
    
        guardarCliente(ClienteConsulta.data);
        console.log(tipos);
    
    }
    useEffect ( ()=>{
        ConsultarAPI();
    },[]);

    //s
    const [alimentosorden, guardarPedidos] = useState({
        action:'insert',
        tipo:'',
        nombreplatillo:'',
        precio:'',
        ingrediente:''
    });

    const actualizarState = e =>{
        //console.log(e.target.value);
        guardarPedidos({
            ...alimentosorden,
            [e.target.name]: e.target.value
        })
    }

    const AgregarPedido = e =>{
        e.preventDefault();
        PedidoAxios.post('/alimentosorden', alimentosorden).then(res=>{
            alert("Pedido Guardado");
            window.location.reload();
            console.log(res);
        });
    }

    const validarPedido = ()=>{
        const{tipo,nombreplatillo,precio,ingrediente} = alimentosorden;
        let valido = !tipo.length || !nombreplatillo.length || !precio.length || !ingrediente.length;
        return valido;
    }

    return (
        <Fragment>
        <h2>Nuevo Pedido</h2>

            <form onSubmit={(AgregarPedido)}>
                <legend>Llena todos los campos</legend>

                <div class="campo">
                    <label>Tipo:</label>
                    <select name="tipo" onChange={actualizarState}>
                        <option value="">Seleccione un Tipo de platillo</option>
                        {tipos.map(tipo=> <option value={tipo.PkTipo}>{tipo.Nombre}</option>)}
                    </select>
                </div>
            
                <div class="campo">
                    <label>Nombre del platillo:</label>
                    <input type="text" placeholder="Fecha de pedido" name="nombreplatillo" onChange={actualizarState}/>
                </div>

                <div class="campo">
                    <label>Precio:</label>
                    <input type="text" placeholder="Fecha de pedido" name="precio" onChange={actualizarState}/>
                </div>

                <div class="campo">
                    <label>Ingredientes:</label>
                    <input type="text" placeholder="Fecha de pedido" name="ingrediente" onChange={actualizarState}/>
                </div>

                {/* <div class="campo">
                    <label>Estado:</label>
                    <select name="estado" onChange={actualizarState}>
                        <option value="">Seleccione una opcion</option>
                        <option value="Enviado">Enviado</option>
                        <option value="En proceso">En proceso</option>
                        <option value="Entregado">Entregado</option>
                    </select>
                </div> */}

                <div class="enviar">
                        <input type="submit" class="btn btn-azul" value="Agregar Pedido" disabled = {validarPedido()}/>
                </div>

            </form>
        </Fragment>
    )
}
export default NuevoAlimentosOrdenes;
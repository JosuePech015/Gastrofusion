import React, { Fragment, useEffect, useState } from 'react';
import PedidoAxios from '../../config/axios';

function NuevoAlimentosOrdenes(){
    
    const[proveedores, guardarCliente] =useState ([]);
    const ConsultarAPI = async() => {
        const ClienteConsulta = await PedidoAxios.get('/proveedor');
    
        guardarCliente(ClienteConsulta.data);
        console.log(proveedores);
    
    }
    useEffect ( ()=>{
        ConsultarAPI();
    },[]);

    //s
    const [inventario, guardarPedidos] = useState({
        action:'insert',
        proveedor: '',
        nombre: '',
        cantidad: '',
        categoria: '',
        descripcion: '',
        costo: ''
    });

    const actualizarState = e =>{
        //console.log(e.target.value);
        guardarPedidos({
            ...inventario,
            [e.target.name]: e.target.value
        })
    }

    const AgregarPedido = e =>{
        e.preventDefault();
        PedidoAxios.post('/inventarios', inventario).then(res=>{
            alert("Pedido Guardado");
            window.location.reload();
            console.log(res);
        });
    }

    const validarPedido = ()=>{
        const{proveedor,nombre,cantidad,categoria,descripcion,costo} = inventario;
        let valido = !proveedor.length || !nombre.length || !cantidad.length || !categoria.length || !descripcion.length || !costo.length;
        return valido;
    }

    return (
        <Fragment>
        <h2>Nuevo Pedido</h2>

            <form onSubmit={(AgregarPedido)}>
                <legend>Llena todos los campos</legend>

                <div class="campo">
                    <label>Proveedor:</label>
                    <select name="proveedor" onChange={actualizarState}>
                        <option value="">Seleccione un proveedor</option>
                        {proveedores.map(proveedor=> <option value={proveedor.Id}>{proveedor.Nombre}</option>)}
                    </select>
                </div>

                <div class="campo">
                    <label>Nombre:</label>
                    <input type="text" placeholder="Fecha de pedido" name="nombre" onChange={actualizarState}/>
                </div>
            
                <div class="campo">
                    <label>Cantidad:</label>
                    <input type="text" placeholder="Fecha de pedido" name="cantidad" onChange={actualizarState}/>
                </div>

                <div class="campo">
                    <label>Categoria:</label>
                    <input type="text" placeholder="Fecha de pedido" name="categoria" onChange={actualizarState}/>
                </div>

                <div class="campo">
                    <label>Descripcion:</label>
                    <input type="text" placeholder="Fecha de pedido" name="descripcion" onChange={actualizarState}/>
                </div>

                <div class="campo">
                    <label>Costo:</label>
                    <input type="text" placeholder="Fecha de pedido" name="costo" onChange={actualizarState}/>
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
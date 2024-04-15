import React, { Fragment, useEffect, useState } from 'react';
import ClienteAxios from '../../config/axios';
import { useParams } from 'react-router-dom';

function EditarAlimentosorden(){
    
    let params = useParams();
    console.log(params.id);

    const[proveedores, guardarCliente] =useState ([]);
    const [inventario, guardareditarPedido] = useState({
        action :'update',
        proveedor: '',
        nombre: '',
        cantidad: '',
        categoria: '',
        descripcion: '',
        costo: '',
        id:''+params.id+''    
    });

    const ConsultarAPI = async() => {
        const ClienteConsulta = await ClienteAxios.get('/proveedor');
        const PedidoConsulta = await ClienteAxios.get('/inventarios/'+params.id+'');
    
        guardarCliente(ClienteConsulta.data);
        guardareditarPedido(PedidoConsulta.data[0]);
    }
    useEffect ( ()=>{
        ConsultarAPI();
    },[]);

    const actualizarState = e =>{
        console.log(e.target.value);
        guardareditarPedido({
            ...inventario,
            [e.target.name]: e.target.value
        })
    }

    const ModificarPedido = e =>{
        e.preventDefault();
        ClienteAxios.post('/inventarios', inventario).then(res=>{
            console.log(res)   
            alert("Pedido Modificado");
            // window.location.reload();
        });
    }

    const validarPedido = ()=>{
        const{proveedor,nombre,cantidad,categoria,descripcion,costo} = inventario;
        let valido = !proveedor.length || !nombre.length || !cantidad.length || !categoria.length || !descripcion.length || !costo.length;
        return valido;
    }

    return (
        <Fragment>
        <h2>Editar Inventario</h2>
        
            <form onSubmit={ModificarPedido}>
                <legend>Llena todos los campos</legend>
            
                <div class="campo">
                    <label>Proveedor:</label>
                    <select name="proveedor" onChange={actualizarState}>
                        {proveedores.map(proveedor=>
                            <option value={proveedor.Id} selected={proveedor.Id === inventario.proveedor}>
                                {proveedor.Nombre}
                            </option>
                        )}
                    </select>
                </div>

                {/* <div class="campo">
                    <label>Fecha:</label>
                    <input type="date" placeholder="Fecha Pedido" name="fechapedido" onChange={actualizarState} value={pedido.fechapedido ? pedido.fechapedido.slice(0, 10) : ''} />
                </div> */}

                {/* <div class="campo">
                    <label>Nombre:</label>
                    <input type="text" placeholder="Fecha de pedido" name="nombre" onChange={actualizarState} value={inventario.Nombre}/>
                </div> */}

                <div class="campo">
                    <label>Cantidad:</label>
                    <input type="text" placeholder="Fecha de pedido" name="cantidad" onChange={actualizarState} value={inventario.Cantidad}/>
                </div>

                <div class="campo">
                    <label>Categoria:</label>
                    <input type="text" placeholder="Fecha de pedido" name="categoria" onChange={actualizarState} value={inventario.Categoria}/>
                </div>

                <div class="campo">
                    <label>Descripcion:</label>
                    <input type="text" placeholder="Fecha de pedido" name="descripcion" onChange={actualizarState} value={inventario.Descripcion}/>
                </div>

                <div class="campo">
                    <label>Costo:</label>
                    <input type="text" placeholder="Fecha de pedido" name="costo" onChange={actualizarState} value={inventario.Costo}/>
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
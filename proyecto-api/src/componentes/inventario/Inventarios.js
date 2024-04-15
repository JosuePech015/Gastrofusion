import React, { Fragment, useEffect, useState } from 'react';
import PedidoAxios from '../../config/axios';
import {Link} from 'react-router-dom';

function Inventario() {
    const [inventarios, guardarPedidos] = useState([]);
    const ConsultarAPI = async () => {
        const PedidosConsulta = await PedidoAxios.get('/inventarios');

        guardarPedidos(PedidosConsulta.data);
        console.log(inventarios);

    }
    useEffect(() => {
        ConsultarAPI();
    }, []);

    const deletePedido = async (id) => {
        try {
            const response = await PedidoAxios.delete('/inventarios/'+id+'');
            alert("Inventario Eliminado");
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Fragment>
            <h2>Pedidos</h2>
            <Link to={"/nuevo-inventario"} class="btn btn-verde nvo-pedido"><i class="fas fa-plus-circle"></i>
                Nuevo Inventario
            </Link>

            <ul class="listado-pedidos">
                {inventarios.map(inventario =>
                    <li class="pedido" key={inventario.PkAlimento}>
                        <div class="info-pedido">
                            <p class="nombre">{inventario.Nombre}</p>
                            {/* "Tipo" es el nombre que le pusimos a la llave foranea */}
                            <p class="carrera">Proveedor: {inventario.Proveedor}</p> 
                            <p>Cantidad: {inventario.Cantidad}</p>
                            <p>Catedoria: {inventario.Categoria}</p>
                            <p>Descripcion: {inventario.Descripcion}</p>
                            <p>Costo: ${inventario.Costo}</p>

                        </div>
                        <div class="acciones">
                            <Link to={"/editar-inventario/" + inventario.PkAlimento} class="btn btn-azul">
                                <i class="fas fa-pen-alt"></i>
                                Editar Pedido
                            </Link>
                            <button type="button" class="btn btn-rojo btn-eliminar" onClick={() => deletePedido(inventario.PkAlimento)}>
                                <i class="fas fa-times"></i>
                                Eliminar Pedido
                            </button>
                        </div>
                    </li>
                )}
            </ul>
        </Fragment>
    )
}
export default Inventario;
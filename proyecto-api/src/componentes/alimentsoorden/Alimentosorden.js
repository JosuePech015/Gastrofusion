import React, { Fragment, useEffect, useState } from 'react';
import PedidoAxios from '../../config/axios';
import {Link} from 'react-router-dom';

function AlimentosOrdenes() {
    const [alimentosordenes, guardarPedidos] = useState([]);
    const ConsultarAPI = async () => {
        const PedidosConsulta = await PedidoAxios.get('/alimentosorden');

        guardarPedidos(PedidosConsulta.data);
        console.log(alimentosordenes);

    }
    useEffect(() => {
        ConsultarAPI();
    }, []);

    const deletePedido = async (id) => {
        try {
            const response = await PedidoAxios.delete('/alimentosorden/'+id+'');
            alert("Pedido Eliminado");
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Fragment>
            <h2>Pedidos</h2>
            <Link to={"/nuevo-alimentosorden"} class="btn btn-verde nvo-pedido"><i class="fas fa-plus-circle"></i>
                Nuevo pedido
            </Link>

            <ul class="listado-pedidos">
                {alimentosordenes.map(alimentosorden =>
                    <li class="pedido" key={alimentosorden.PkPlatillo}>
                        <div class="info-pedido">
                            <p class="nombre">{alimentosorden.NombrePlatillo}</p>
                            {/* "Tipo" es el nombre que le pusimos a la llave foranea */}
                            <p class="carrera">Tipo: {alimentosorden.Tipo}</p> 
                            <p>Precio: ${alimentosorden.Precio}</p>
                            <p>Ingredientes:{alimentosorden.Ingrediente}</p>

                        </div>
                        <div class="acciones">
                            <Link to={"/editar-alimentosorden/" + alimentosorden.PkPlatillo} class="btn btn-azul">
                                <i class="fas fa-pen-alt"></i>
                                Editar Pedido
                            </Link>
                            <button type="button" class="btn btn-rojo btn-eliminar" onClick={() => deletePedido(alimentosorden.PkPlatillo)}>
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
export default AlimentosOrdenes;
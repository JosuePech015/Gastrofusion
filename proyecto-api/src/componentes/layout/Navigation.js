import React from 'react';
// Para ruteo perfomance Clase de 22 de febrero
import {Link} from 'react-router-dom';
function Navigation(){
return( 
<aside class="sidebar col-3">
<h2>Administración</h2>

<nav class="navegacion">
    <Link to={"/alumnos"} class="alumnos">Alimentos</Link>
    {/* <Link to={"/carreras"} class="carreras">Carreras</Link> */}
    <Link to={"/calificaciones"} class="alumnos">Proveedores</Link>
    <Link to={"/tipos"} class="carreras">Tipos</Link>
    <Link to={"/alimentosordenes"} class="calificaciones">Ordenes de Alimento</Link>
    <Link to={"/inventarios"} class="carreras">Inventario</Link>



</nav>
</aside>

)
}
export default Navigation;

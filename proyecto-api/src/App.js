//#region
// // import logo from './logo.svg';
// import './App.css';
// import axios from 'axios';
// axios.get('http://localhost:8888/alumnos')//retirnind piedgesusing a het-query
// .the((response)=> {//Data retrieval and processing
//   console.log(response.data);})
//   .catch((error)=>{ //If the query faile, an error will he display on the terminal
//     console.error(error);});

// function App() {
//   return (
//     <p>Hola</p>
//   );
// }

// import React, { useEffect } from 'react';
// import './App.css';
// import axios from 'axios';

// function App() {
//   useEffect(() => {
//     axios.get('http://localhost:8888/alumnos')
//       .then((response) => {
//         console.log(response.data);
//         // Puedes hacer algo con los datos, como guardarlos en el estado del componente
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []); // Asegúrate de que esta función useEffect solo se ejecute una vez al montar el componente

//   return (
//     <p>Hola Mundo</p>
//   );
// }

// export default App;

//#endregion
import React, {Fragment} from 'react';
import Header from '../src/componentes/layout/header';
import Navigation from './componentes/layout/Navigation';
//se INSTALÓ NPM ---
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Importar alumnos de la carpeta COMPONENTES(A/C/CA)
import Alumnos  from './componentes/alumnos/Alumnos';
import Tipos  from './componentes/tipo/Tipos';
import Alimentosorden  from './componentes/alimentsoorden/Alimentosorden';
import NuevoAlimentosorden from './componentes/alimentsoorden/NuevoAlimentosorden';
import Calificaciones from './componentes/calificaciones/Calificaciones';
import Inventarios from './componentes/inventario/Inventarios';
import Carreras from './componentes/carreras/Carreras';
import NuevoAlumno from './componentes/alumnos/NuevoAlumno';
import NuevoProveedor from './componentes/calificaciones/NuevoProveedor';
import EditarAlimento from './componentes/alumnos/EditarAlimento';
import EditarProveedor from './componentes/calificaciones/EditarProveedor';
import EditarAlimentosorden from './componentes/alimentsoorden/EditarAlimentosorden';
import EditarInventario from './componentes/inventario/EditarInventario';
import NuevoInventario from './componentes/inventario/NuevoInventario';





 function App() {
  return (
    <Router>
      <Fragment>
       <Header/>
       <div class="grid contenedor contenido-principal">
        <Navigation/>
        <main class="caja-contenido col-9">
         
          <Routes>
          {/* <p>AQUI VAMOS A CREAR LAS RUTAS</p> */}
            <Route path='/alumnos'element= {<Alumnos/>}/>
            <Route path='/nuevo-alimento'element= {<NuevoAlumno/>}/>
            <Route path='/editar-alimentos/:id'element= {<EditarAlimento/>}/>
            <Route path='/editar-proveedores/:id'element= {<EditarProveedor/>}/>
            <Route path='/editar-alimentosorden/:id'element= {<EditarAlimentosorden/>}/>
            <Route path='/editar-inventario/:id'element= {<EditarInventario/>}/>
            <Route path='/carreras' element= {<Carreras/>}/>
            <Route path='/calificaciones'element= {<Calificaciones/>}/>
            <Route path='/nuevo-proveedor'element= {<NuevoProveedor/>}/>
            <Route path='/tipos'element= {<Tipos/>}/>
            <Route path='/alimentosordenes'element= {<Alimentosorden/>}/>
            <Route path='/nuevo-alimentosorden'element= {<NuevoAlimentosorden/>}/>
            <Route path='/inventarios'element= {<Inventarios/>}/>
            <Route path='/nuevo-inventario'element= {<NuevoInventario/>}/>








          </Routes>
         </main>
       </div>
    </Fragment>
    </Router>
   );
 }
 
 export default App;

//importar las vistas

// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.

/*
import Example from './views/Example.js';


Ejemplo de definición de rutas:

const routes = {
    "/": Example,
    ...
}
*/

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/




import { Home } from './views/Home.js'; /// Home ---> { Home }
import { Detail } from './views/Detail.js';
import { IndividualChat } from './views/IndividualChat.js';
import { GroupChat } from './views/GroupChat.js';
// ... import other views
import { setRootEl, setRoutes, onURLChange} from './router.js';

// Define your routes and their associated views
const routes = {
  '/': Home(),
  '/detail': Detail(),
  '/individualchat': IndividualChat (),
  '/groupchat': GroupChat ()
  // ...
};

// Assign the routes
setRoutes(routes);


// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", () => {
  setRootEl(document.getElementById('root'));
  // invoke onURLChange 
  onURLChange(window.location)
  console.log( 'window', (window.location));
});
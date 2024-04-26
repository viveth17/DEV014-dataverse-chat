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
import { Shark } from './views/Shark.js';
import { IndividualChat } from './views/IndividualChat.js';
import { GroupChat } from './views/GroupChat.js';
import { Error } from './views/Error.js';
// ... import other views
import { setRootEl, setRoutes, onURLChange} from './router.js';
import { setApiKey } from './lib/apiKey.js';
//import { getApiKey, setApiKey } from './lib/apiKey';


// Define your routes and their associated views
const routes = {
  '/': Home(),
  '/shark': Shark(),
  '/individualchat': IndividualChat (),
  '/groupchat': GroupChat (),
  '/error': Error ()
  // ...
};

// Assign the routes
setRoutes(routes);


// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", () => {
  setRootEl(document.getElementById('root'));
  // invoke onURLChange 
  onURLChange(window.location)
  // console.log( 'window', (window.location));
  // Agregando la funcionalidad de la ventana emergente
  const showApiKeyDialogButton = document.getElementById('showApiKeyDialog');
  const apiKeyDialog = document.getElementById('apiKeyDialog');
  //Muestra el dialogo al hacer click en la imagen de la llave
  showApiKeyDialogButton.addEventListener('click', () => {
    if (apiKeyDialog) {
      apiKeyDialog.showModal();
    }
  });
  //cerrar el dialogo al hacer click en la "X"
  const closeApiKeyDialogButton = document.getElementById ('closeApiKeyDialog');
  if (closeApiKeyDialogButton){
    closeApiKeyDialogButton.addEventListener('click', () => {
      if (apiKeyDialog){
        apiKeyDialog.close();
      }
    });
  }
  //Guardar la API KEY al hacer click en el botón de "Guardar API KEY"
  const saveApiKeyButton = document.getElementById('saveApiKeyButton');
  if (saveApiKeyButton) {
   
    saveApiKeyButton.addEventListener('click', () => {
      const apiKeyInput = document.getElementById('apiKeyInput');
      const apiKey = apiKeyInput.value.trim(); // Obtener y limpiar el valor de la API KEY
      // Implementar lógica para guardar y utilizar la API KEY aquí
     
      setApiKey(apiKey);
      // console.log('API KEY ingresada:', apiKey);
      // Limpiar el input después de guardar la API KEY
      apiKeyInput.value = '';

      // Cerrar el diálogo después de guardar la API KEY
      if (apiKeyDialog) {
        apiKeyDialog.close();
      }
    });
  }
});



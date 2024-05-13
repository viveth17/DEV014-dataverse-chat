import Home from './views/Home.js'; /// Home ---> { Home }
import  Shark  from './views/Shark.js';
import  IndividualChat  from './views/IndividualChat.js';
import  GroupChat  from './views/GroupChat.js';
import  Error  from './views/Error.js';
// ... import other views
import { setRootEl, setRoutes, onURLChange} from './router.js';
// import { getApiKey, setApiKey } from './lib/apiKey';


// Define your routes and their associated views
const routes = {
  '/': Home,
  '/shark': Shark,
  '/individualchat': IndividualChat,
  '/groupchat': GroupChat,
  '/error': Error
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
  // Handle URL changes forward and back
  window.addEventListener("popstate", () => {
    onURLChange(window.location);
  });
});



import Home from './views/Home.js'; 
import  Shark  from './views/Shark.js';
import  IndividualChat  from './views/IndividualChat.js';
import  GroupChat  from './views/GroupChat.js';
import  Error  from './views/Error.js';
import { setRootEl, setRoutes, onURLChange} from './router.js';



const routes = {
  '/': Home,
  '/shark': Shark,
  '/individualchat': IndividualChat,
  '/groupchat': GroupChat,
  '/error': Error
};


setRoutes(routes);



window.addEventListener("DOMContentLoaded", () => {
  setRootEl(document.getElementById('root'));

  onURLChange(window.location)

  window.addEventListener("popstate", () => {
    onURLChange(window.location);
  });
});



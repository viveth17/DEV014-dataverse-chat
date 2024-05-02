// import { data } from '../data/dataset.js';
// import { filterData } from '../lib/dataFunctions.js';
// import { navigateTo } from '../router.js';
// import { setApiKey } from '../lib/apiKey.js';
// import { communicateWithOpenAI } from "../lib/openAIApi.js";

export default function GroupChat(props) {
  const viewEl = document.createElement('div');

  viewEl.innerHTML = `
    <header>
    <h1>SharkInfo</h1>
    <h2>Sumérgete en el mundo de los tiburones</h2>
  </header>
  <main>
    <div id="root"></div>
  </main>
  <footer>
    <p class="p">
      Hecho por Mireilys e Iveth</p>
  </footer> 
  `
  return viewEl;
}
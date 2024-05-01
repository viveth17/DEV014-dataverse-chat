import { data } from '../data/dataset.js';
import { filterData, sortBySharkSize, computeStats } from '../lib/dataFunctions.js';
import { renderItems } from '../lib/views.js';
import { navigateTo } from '../router.js';

export default function Home()  {

  const viewEl = document.createElement('div');
  viewEl.innerHTML = `
  <header>
  <h1>SharkInfo</h1>
  <h2>Sumérgete en el mundo de los tiburones</h2>
</header>
<main>
  <section>
    <div class="actionsContainer">
      <label for="locationOfTheSpecie"> Hábitat:</label>
      <select id="locationOfTheSpecie" name="locationOfTheSpecie" data-testid="select-filter">
        <option value="Todas">Todas</option>
        <option value="Aguas profundas">Aguas profundas</option>
        <option value="Aguas tropicales y subtropicales">Aguas tropicales y subtropicales</option>
        <option value="Océano Atlántico">Océano Atlántico</option>
        <option value="Océano Pacífico">Océano Pacífico</option>
        <option value="Océanos en todo el mundo">Océanos en todo el mundo</option>
      </select>
    </div>
    <div class="actionsContainer">
      <label for="maximumSizeMtr">Tamaño:</label>
      <select id="maximumSizeMtr" name="maximumSizeMtr" data-testid="select-sort">
        <option>Sin orden</option>
        <option value="asc">0 - 15</option>
        <option value="desc">15 - 0</option>
      </select>
    </div>
     <!--Imagen de la llave-->
     <div class="apiKeyContainer">
     <svg id="showApiKeyDialog" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="
   ">
       <path fill-rule="evenodd" clip-rule="evenodd"
         d="M13 12.8293C14.1652 12.4175 15 11.3062 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.3062 9.83481 12.4175 11 12.8293V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V12.8293ZM11 10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10Z"
         fill="currentColor"></path>
       <path fill-rule="evenodd" clip-rule="evenodd"
         d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"
         fill="currentColor"></path>
     </svg>
     <p>Api Key</p>
   </div>
    <div class="actionsContainer">
    <p id="longevityText">Longevidad promedio:</p>
    <button id="longevityProm">Calcular</button>
  </div>
    <button id="clearFilter" data-testid="button-clear">Limpiar filtros</button>
  </section>
  <!--Dialogo para ingresar la API KEY-->
  <dialog id="apiKeyDialog">
  <div class="dialogHeader">
    <label for="apiKeyInput">Ingresa tu API KEY:</label>
    <button id="closeApiKeyDialog">x</button>
  </div>
  <div class="dialogBody">
    <input type="text" id="apiKeyInput" placeholder="Pega tu API KEY aquí" />
    <button id="saveApiKeyButton" class="custom-button">Guardar API KEY</button>
  </div>
</dialog>
  <div id="root"></div>
</main>
<div class="iconChat">
<svg id="iconChatGroup" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg>
</div>
<footer>
  <p class="p">
    Hecho por Mireilys e Iveth</p>
</footer>
`
  viewEl.classList.add("bodySection");
  const divElement = viewEl.querySelector('#root');
  //console.log('divElement', divElement);
  let statusData = data;
  divElement.appendChild(renderItems(statusData));
  //console.log('data',data);

  const selectElement = viewEl.querySelector('#locationOfTheSpecie');
  selectElement.addEventListener('change', function () {
    const selectedValue = selectElement.value;
    if (selectedValue === 'Todas') {
      divElement.replaceChildren(renderItems(data));
    } else {
      const filteredData = filterData(data, 'facts.locationOfTheSpecie', selectedValue);
      statusData = filteredData;
      divElement.replaceChildren(renderItems(statusData));
    }
  });

  const sortElement = viewEl.querySelector("#maximumSizeMtr");
  sortElement.addEventListener("change", function (event) {
    const sortValue = event.target.value;

    let sortedData;
    if (sortValue === 'asc') {
      sortedData = sortBySharkSize(statusData, 'maximumSizeMtr', 'asc');
    } else if (sortValue === 'desc') {
      sortedData = sortBySharkSize(statusData, 'maximumSizeMtr', 'desc');
    } else {
      sortedData = statusData;
    }
    //console.log('sortedData',sortedData);
    statusData = sortedData
    divElement.replaceChildren(renderItems(statusData));
  });

  const longevityAverage = viewEl.querySelector('#longevityProm');
  const longevityText = viewEl.querySelector('#longevityText');
  longevityAverage.addEventListener("click", () => {
    longevityText.innerHTML = 'Longevidad promedio: ' + computeStats(statusData) + ' años';

  });

  const buttonClear = viewEl.querySelector('#clearFilter');
  buttonClear.addEventListener("click", () => {
    statusData = data;
    divElement.replaceChildren(renderItems(statusData));
    viewEl.querySelector('#locationOfTheSpecie').value = 'Todas';
    const maximumSizeSelect = viewEl.querySelector('#maximumSizeMtr');
    maximumSizeSelect.value = 'Sin orden';
    viewEl.querySelector('#longevityText').innerHTML = 'Longevidad promedio:';
  })

  //botón Chat Grupal//
  const buttonGroupChat = viewEl.querySelector('#iconChatGroup');
  buttonGroupChat.addEventListener('click', () => navigateTo("/groupchat", { }));
  return viewEl;
}
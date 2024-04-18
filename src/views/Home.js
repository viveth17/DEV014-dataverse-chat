// export function Home(props) {
//   // // Aquí se generar el contenido de tu vista principal
//   // // se retorna un elemento DOM que contenga las tarjetas de los tiburones.
//   // // se agrega la funcionalidad de filtrado, ordenamiento y promedio
//   // const viewEl = document.createElement('div');
//   // viewEl.innerHTML = `
//   // <header>
//   //   <h1>SharkInfo</h1>
//   //   <h2>Sumérgete en el mundo de los tiburones</h2>
//   // </header>
//   // <main>
//   //   <section>
//   //     <label for="locationOfTheSpecie"> Hábitat:</label>
//   //     <select id="locationOfTheSpecie" name="locationOfTheSpecie" data-testid="select-filter">
//   //       <option value="Todas">Todas</option>
//   //       <option value="Aguas profundas">Aguas profundas</option>
//   //       <option value="Aguas tropicales y subtropicales">Aguas tropicales y subtropicales</option>
//   //       <option value="Océano Atlántico">Océano Atlántico</option>
//   //       <option value="Océano Pacífico">Océano Pacífico</option>
//   //       <option value="Océanos en todo el mundo">Océanos en todo el mundo</option>
//   //     </select>
//   //     <label for="maximumSizeMtr">Tamaño:</label>
//   //     <select id="maximumSizeMtr" name="maximumSizeMtr" data-testid="select-sort">
//   //       <option>Sin orden</option>
//   //       <option value="asc">0 - 15</option> 
//   //       <option value="desc">15 - 0</option> 
//   //     </select>
//   //     <p id="longevityText">Longevidad promedio:</p>
//   //     <button id="longevityProm">Calcular</button>
//   //     <button id="clearFilter" data-testid="button-clear">Limpiar filtros</button>
//   //   </section>
//   //   <div id="root"></div>
//   // </main>
//   // <footer>
//   //   <p class="p">
//   //     Hecho por Mireilys e Iveth</p>
//   // </footer>
//   // <script src="main.js" type="module"></script>';
//   // `
//   // return viewEl;



//   const viewEl = document.createElement('div');
//   viewEl.textContent = 'Welcome to the home page!';
//   return viewEl;
// }

import data  from '../data/dataset.js';
import { filterData, sortBySharkSize, computeStats} from '../lib/dataFunctions.js';
import { renderItems } from '../lib/views.js';

export function Home(props) {

  const viewEl = document.createElement('div');
  viewEl.innerHTML = `
  <header>
  <h1>SharkInfo</h1>
  <h2>Sumérgete en el mundo de los tiburones</h2>
</header>
<main>
  <section>
    <label for="locationOfTheSpecie"> Hábitat:</label>
    <select id="locationOfTheSpecie" name="locationOfTheSpecie" data-testid="select-filter">
      <option value="Todas">Todas</option>
      <option value="Aguas profundas">Aguas profundas</option>
      <option value="Aguas tropicales y subtropicales">Aguas tropicales y subtropicales</option>
      <option value="Océano Atlántico">Océano Atlántico</option>
      <option value="Océano Pacífico">Océano Pacífico</option>
      <option value="Océanos en todo el mundo">Océanos en todo el mundo</option>
    </select>
    <label for="maximumSizeMtr">Tamaño:</label>
    <select id="maximumSizeMtr" name="maximumSizeMtr" data-testid="select-sort">
      <option>Sin orden</option>
      <option value="asc">0 - 15</option> 
      <option value="desc">15 - 0</option> 
    </select>
    <p id="longevityText">Longevidad promedio:</p>
    <button id="longevityProm">Calcular</button>
    <button id="clearFilter" data-testid="button-clear">Limpiar filtros</button>
  </section>
  <div></div>
</main>
<footer>
  <p class="p">
    Hecho por Mireilys e Iveth</p>
</footer> 
`


  //   // // se agrega la funcionalidad de filtrado, ordenamiento y promedio
  const divElement = viewEl.childNodes[3];
  console.log('divElement',divElement);
  let statusData = data;
  divElement.appendChild(renderItems(statusData));
  
  // const selectElement = document.getElementsByName("locationOfTheSpecie")[0];
  // selectElement.addEventListener('change', function () {
  //   const selectedValue = selectElement.value;
  //   if (selectedValue === 'Todas') {
  //     htmlElement.getElementsByTagName('body')[0].getElementsByTagName('div')[0].replaceChildren(renderItems(data));
  //   } else {
  //     const filteredData = filterData(data, 'facts.locationOfTheSpecie', selectedValue);
  //     statusData = filteredData;
  //     htmlElement.getElementsByTagName('body')[0].getElementsByTagName('div')[0].replaceChildren(renderItems(statusData));
  //   }
  // });
  
  // const sortElement = document.getElementsByName("maximumSizeMtr")[0];
  // sortElement.addEventListener("change", function (event) {
  //   const sortValue = event.target.value;
  
  //   let sortedData;
  //   if (sortValue === 'asc') {
  //     sortedData = sortBySharkSize(statusData, 'maximumSizeMtr', 'asc');
  //   } else if (sortValue === 'desc') {
  //     sortedData = sortBySharkSize(statusData, 'maximumSizeMtr', 'desc');
  //   } else {
  //     sortedData = statusData;
  //   }
  //   statusData = sortedData
  //   htmlElement.getElementsByTagName('body')[0].getElementsByTagName('div')[0].replaceChildren(renderItems(statusData));
  // });
  
  // const buttonClear = document.getElementById('clearFilter');
  // buttonClear.addEventListener("click", () => {
  //   statusData = data;
  //   htmlElement.getElementsByTagName('body')[0].getElementsByTagName('div')[0].replaceChildren(renderItems(statusData));
  //   document.querySelector('#locationOfTheSpecie').value = 'Todas';
  //   const maximumSizeSelect =document.querySelector('#maximumSizeMtr');
  //   maximumSizeSelect.value = 'Sin orden';
  //   document.querySelector('#longevityText').innerHTML = 'Longevidad promedio:';
  // })
  
  // const longevityAverage = document.querySelector('#longevityProm');
  // const longevityText = document.querySelector('#longevityText');
  // longevityAverage.addEventListener("click", () => {
  //   longevityText.innerHTML = 'Longevidad promedio: ' + computeStats(statusData) + ' años';
  
  // })
  
  return viewEl;
}

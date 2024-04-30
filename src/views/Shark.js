import { data } from '../data/dataset.js';
import { filterData} from '../lib/dataFunctions.js';

export default function Shark(props) {
  const viewEl = document.createElement('div');
  const filterItem = filterData(data, 'id', props.id)
  filterItem.forEach(item => {
    const liElement = document.createElement('li');
    liElement.setAttribute("class", "card");
    liElement.setAttribute("itemtype", item.nombreDeLaEspecie);
    liElement.setAttribute("itemscope", "");
    liElement.innerHTML =
      viewEl.innerHTML = `
    <header>
    <h1>SharkInfo</h1>
    <h2>Sumérgete en el mundo de los tiburones</h2>
  </header>
  <main>
  <dl class="dlStyle">
  <img id="imageShark" src=${item.imageUrl} alt="sharks" />
  <div>
  <h3 id="nameShark" itemprop="name">${item.name}</h3>
  <h4 id="scientificName" itemprop="nombre de la especie">${item.nombreDeLaEspecie}</h4>
  <p id="textDescription" itemprop="description">${item.description}</p>
  </div>
  </dl>
    <div id="root"></div>
  </main>
  <footer id="footerShark">
    <p class="p">
      Hecho por Mireilys e Iveth</p>
  </footer> 
  `


  });
  return viewEl;
}
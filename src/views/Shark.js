import data from '../data/dataset.js';

export function Shark () {
  const viewEl = document.createElement('div');
  data.forEach(item => {
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
  <dl>
  <img src=${item.imageUrl} alt="sharks" />
  <div>
  <h3 itemprop="name">${item.name}</h3>
  <h4 itemprop="nombre de la especie">${item.nombreDeLaEspecie}</h4>
  <p itemprop="description">${item.description}</p>
  </div>
  </dl>
    <div id="root"></div>
  </main>
  <footer>
    <p class="p">
      Hecho por Mireilys e Iveth</p>
  </footer> 
  `
  
  
  });
  return viewEl;
}
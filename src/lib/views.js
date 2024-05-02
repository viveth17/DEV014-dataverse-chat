import { navigateTo } from '../router.js';

export const renderItems = (data) => {
  const ulElement = document.createElement('ul');
  data.forEach(item => {
    const liElement = document.createElement('li');
    liElement.setAttribute("class", "card");
    liElement.setAttribute("itemtype", item.nombreDeLaEspecie);
    liElement.setAttribute("itemscope", "");
    liElement.innerHTML = `
      <dl>
      <img src=${item.imageUrl} alt="sharks" />
      <div>
      <h3 itemprop="name">${item.name}</h3>
      <h4 itemprop="nombre de la especie">${item.nombreDeLaEspecie}</h4>
      <p itemprop="shortDescription">${item.shortDescription}</p>
      <p itemprop="maximumSizeMtr" class="numberMts"> <strong>Tamaño: </strong> ${item.maximumSizeMtr} Mtr</p>
      <p itemprop="locationOfTheSpecie" class="location"> <strong> Hábitat :  </strong>${item.facts.locationOfTheSpecie}</p>
      </div>
      <div class="buttonInfoAndChat">
      <button id="moreInfo"> Más info </button>
      <button id="individualChat"> Chat </button>
      </div> 
      </dl>
    `
    //botón Más Info//
    const buttonMoreInfo = liElement.querySelector('#moreInfo');
    buttonMoreInfo.addEventListener('click', () => navigateTo("/shark", { id: item.id }));
    //botón Chat Individual//
    const buttonIndividualChat = liElement.querySelector('#individualChat');
    buttonIndividualChat.addEventListener('click', () => navigateTo("/individualchat", { id: item.id}));
    ulElement.appendChild(liElement);


  }); 
  return ulElement;

};


import { navigateTo } from '../router.js';

export default function Error() {
  const viewEl = document.createElement('div');
  viewEl.innerHTML = `
  <link rel="stylesheet" href="styleError.css" />
      <p class="titleError"> OOOPS, PAGE NOT FOUND </p>
      <p class="subtitleError"> 404 </p>
      <div class="sharkError">
      <img src="https://img.freepik.com/premium-photo/cartoon-shark-with-blue-face-white-background_900101-40833.jpg?w=996">
      </div>
      <button id="backHome"> Volver al inicio </button>
    `
  const buttonBackHome = viewEl.querySelector('#backHome');
  buttonBackHome.addEventListener('click', () => navigateTo("/"));


  return viewEl;
}

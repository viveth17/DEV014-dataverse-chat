import { data } from '../data/dataset.js';
import { navigateTo } from '../router.js';
import { setApiKey, getApiKey } from '../lib/apiKey.js';
import { communicateWithOpenAI } from "../lib/openAIApi.js";

export default function GroupChat() {

  const viewEl = document.createElement('div');
  data.map(shark => {
    viewEl.innerHTML += `
      <div class="containerMenuChat">
        <img class="imgenChatGroup" src="${shark.imageUrl}" alt="imagen tiburon">
      </div>
    `;
  });
  viewEl.innerHTML = `
  <link rel="stylesheet" href="styleGroupChat.css" />
    <section class="contentIcons">
    <div id="iconHome">
    <svg id="homeIcon"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M21 8.77217L14.0208 1.79299C12.8492 0.621414 10.9497 0.621413 9.77817 1.79299L3 8.57116V23.0858H10V17.0858C10 15.9812 10.8954 15.0858 12 15.0858C13.1046 15.0858 14 15.9812 14 17.0858V23.0858H21V8.77217ZM11.1924 3.2072L5 9.39959V21.0858H8V17.0858C8 14.8767 9.79086 13.0858 12 13.0858C14.2091 13.0858 16 14.8767 16 17.0858V21.0858H19V9.6006L12.6066 3.2072C12.2161 2.81668 11.5829 2.81668 11.1924 3.2072Z"
    fill="currentColor"
  />
</svg>
<p id="textHome">Inicio </p>
    </div>
    <!--Imagen de la llave-->
    <div class="apiKeyContainer">
    <svg id="apiKeyIcon" class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="
  ">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M13 12.8293C14.1652 12.4175 15 11.3062 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.3062 9.83481 12.4175 11 12.8293V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V12.8293ZM11 10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10Z"
        fill="currentColor"></path>
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"
        fill="currentColor"></path>
    </svg>
    <p id="textKey" class="textkeydesktop">Api Key</p>
  </div>
    </section>
  <main>
  <div class="menu">
  ${viewEl.innerHTML}
  </div> 
    <div class="response-container">
    </div>
    <div class="imgContentChat">
    <div class="input-container">
    <input  id="input-message" class="message-input" type="text" placeholder="Pregunta a estos tiburones parlantes">
    <svg id="iconSends" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
</svg>
</div>
    </div>
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
  </main>
  `
  const buttonHome = viewEl.querySelector("#homeIcon");
  buttonHome.addEventListener("click", () => {
    navigateTo("/");
  });

  const showApiKeyDialogButton = viewEl.querySelector('#apiKeyIcon');
  const apiKeyDialog = viewEl.querySelector('#apiKeyDialog');

  showApiKeyDialogButton.addEventListener('click', () => {
    if (apiKeyDialog) {
      apiKeyDialog.showModal();
    }
  });

  const closeApiKeyDialogButton = viewEl.querySelector('#closeApiKeyDialog');
  if (closeApiKeyDialogButton) {
    closeApiKeyDialogButton.addEventListener('click', () => {
      if (apiKeyDialog) {
        apiKeyDialog.close();
      }
    });
  }
  const saveApiKeyButton = viewEl.querySelector('#saveApiKeyButton');
  if (saveApiKeyButton) {

    saveApiKeyButton.addEventListener('click', () => {
      const apiKeyInput = viewEl.querySelector('#apiKeyInput');
      const apiKey = apiKeyInput.value.trim();

      setApiKey(apiKey);

      apiKeyInput.value = '';

      if (apiKeyDialog) {
        apiKeyDialog.close();
      }
    });
  }

  const buttonSend = viewEl.querySelector("#iconSends");
  const inputText = viewEl.querySelector(".message-input");
  buttonSend.addEventListener("click", () => {
    const wordsUser = viewEl.querySelector("#input-message").value;

    const viewChat = document.createElement('div');
    viewChat.innerHTML = `
    <div class="user-response">
      <span class="wordsuser"> ${wordsUser} </span>
      </div>
    `
    viewEl.querySelector(".response-container").appendChild(viewChat);

    const apiKey = getApiKey();


    const promiseSharks = data.map(function (shark) {
      return communicateWithOpenAI(wordsUser, shark.id, apiKey, shark.name).then(response => {
        return response.choices[0].message.content
      })
    });

    Promise.all(promiseSharks)
      .then((responses) => {
        responses.forEach((response, index) => {
          const shark = data[index];
          const viewChatOpenIa = document.createElement('div');
          viewChatOpenIa.innerHTML = `
          <div class="ai-response">
          <div class="res">
          <p class="nameResponse"> ${shark.name} </p>
          <svg class="colorReloj"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 7H11V12H16V14H9V7Z" fill="currentColor" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
            fill="currentColor"
          />
        </svg>
          <p class="text-muted small mb-0"><i class="far fa-clock"></i> 12 mins ago</p>
          <i class="far fa-clock"></i> 
          </p>
          </div>
            <span class="responsemessage">
              ${response}
            </span>
          </div>
        `;
          viewEl.querySelector(".response-container").appendChild(viewChatOpenIa);
          const inputMessage = viewEl.querySelector("#input-message");
          inputMessage.value = "";
          // Scroll hacia el último mensaje
          viewEl.querySelector(".response-container").scrollTo(0, viewEl.querySelector(".response-container").scrollHeight);
        });
      });







  });

  inputText.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {

      const wordsUser = viewEl.querySelector("#input-message").value;

      const viewChat = document.createElement('div');
      viewChat.innerHTML = `
    <div class="user-response">
      <span class="wordsuser"> ${wordsUser} </span>
      </div>
    `
      viewEl.querySelector(".response-container").appendChild(viewChat);

      const apiKey = getApiKey();


      const promiseSharks = data.map(function (shark) {
        return communicateWithOpenAI(wordsUser, shark.id, apiKey, shark.name).then(response => {
          return response.choices[0].message.content
        })
      });
      //console.log("promiseSharks", promiseSharks)
      // Promise.all(promiseSharks)
      //   .then((response) => {
      //     response.forEach(element => {
      //       const viewChatOpenIa = document.createElement('div');
      //       viewChatOpenIa.innerHTML = `
      //       <div class="ai-response">
      //       <span class="responsemessage">
      //       ${element}
      //       </span>
      //     </div>
      //     `
      //       viewEl.querySelector(".response-container").appendChild(viewChatOpenIa);
      //       const inputMessage = viewEl.querySelector("#input-message");
      //       inputMessage.value = "";
      //     });
      //   });

      Promise.all(promiseSharks)
        .then((responses) => {
          responses.forEach((response, index) => {
            const shark = data[index];
            const viewChatOpenIa = document.createElement('div');
            viewChatOpenIa.innerHTML = `
          <div class="ai-response">
          <div class="res">
          <p class="nameResponse"> ${shark.name} </p>
          <svg class="colorReloj"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 7H11V12H16V14H9V7Z" fill="currentColor" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
            fill="currentColor"
          />
        </svg>
          <p class="text-muted small mb-0"><i class="far fa-clock"></i> 12 mins ago</p>
          <i class="far fa-clock"></i> 
          </p>
          </div>
            <span class="responsemessage">
              ${response}
            </span>
          </div>
        `;
            viewEl.querySelector(".response-container").appendChild(viewChatOpenIa);
            const inputMessage = viewEl.querySelector("#input-message");
            inputMessage.value = "";
            // Scroll hacia el último mensaje
            viewEl.querySelector(".response-container").scrollTo(0, viewEl.querySelector(".response-container").scrollHeight);
          });
        });

    }
  });
  return viewEl;
}
import { getApiKey } from './apiKey.js';


export const communicateWithOpenAI = (messages,) => {
//Aquí es donde debes implementar la petición con fetch o axios
  // Obtener la clave de API
  const apiKey = getApiKey();
  // URL de la API de OpenAI
  const url = 'https://api.openai.com/v1/chat/completions';
  

  // Cuerpo de la solicitud con el texto de entrada
  const body = {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: messages }],
    temperature: 0.7,
    max_tokens: 50 // número máximo de tokens para generar
  };

  // Opciones de la solicitud
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}` // Incluir la clave de API en el encabezado de autorización
      
    },
    body: JSON.stringify(body)
  };

  // Hacer la solicitud usando fetch
  return fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud: ' + response.status);
      }
      return response.json();
    })
    .then(data => {
      return data; // Devolver los datos de respuesta de OpenAI
    })
    .catch(error => {
      throw error; // Relanzar el error para que pueda ser manejado externamente si es necesario
    });
};
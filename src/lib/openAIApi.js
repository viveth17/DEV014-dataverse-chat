
export const communicateWithOpenAI = (messages,id, apiKey,) => {
  const url = 'https://api.openai.com/v1/chat/completions';
  
  const body = {
    model: "gpt-3.5-turbo",
    messages: [
      { role: "user", content: messages },
      { role:"system", content:`Responde en primera persona y forma concisa como si fueras el tiburón: ${id}`}
    ],
    temperature: 0.7,
    max_tokens: 40 
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}` // Incluir la clave de API en el encabezado de autorización
      
    },
    body: JSON.stringify(body)
  };

  return fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud: ' + response.status);
      }
      return response.json();
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      throw error; 
    });
};
import { communicateWithOpenAI } from '../src/lib/openAIApi.js';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

describe('communicateWithOpenAI', () => {
  beforeEach(() => {
    fetchMock.resetMocks(); // Reinicia las simulaciones de fetch antes de cada prueba
  });

  it('debería enviar una solicitud a la API de OpenAI y devolver los datos correctamente', () => {
    // Configura el mock de fetch para devolver una respuesta simulada
    fetchMock.mockResponseOnce(JSON.stringify({ exampleResponse: 'data' }));

    // Llama a la función y espera la respuesta
    return communicateWithOpenAI('Mensaje de prueba', 'identificador', 'claveAPI')
      .then(response => {
        // Verifica que fetch se haya llamado correctamente con los parámetros esperados
        expect(fetchMock).toHaveBeenCalledWith(
          'https://api.openai.com/v1/chat/completions',
          expect.objectContaining({
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer claveAPI'
            },
            body: expect.any(String)
          })
        );

        // Verifica que la función devuelva los datos esperados
        expect(response).toEqual({ exampleResponse: 'data' });
      });
  });

  it('debería manejar errores de red correctamente', () => {
    // Configura el mock de fetch para devolver un error de red
    fetchMock.mockRejectOnce(new Error('Failed to fetch'));

    // Llama a la función y espera que lance un error
    return expect(communicateWithOpenAI('Mensaje de prueba', 'identificador', 'claveAPI')).rejects.toThrow('Failed to fetch');
  });

  it('debería lanzar un error si la solicitud no es exitosa', () => {
  // Configura el mock de fetch para devolver una respuesta no exitosa
    fetchMock.mockResponseOnce(JSON.stringify({}), { status: 404, statusText: 'Not Found' });

    // Llama a la función y espera que lance un error
    return expect(communicateWithOpenAI('Mensaje de prueba', 'identificador', 'claveAPI')).rejects.toThrow('Error en la solicitud: 404');
  });
});

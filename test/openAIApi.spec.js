import { communicateWithOpenAI } from '../src/lib/openAIApi.js';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

describe('communicateWithOpenAI', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('debería enviar una solicitud a la API de OpenAI y devolver los datos correctamente', () => {
    fetchMock.mockResponseOnce(JSON.stringify({ exampleResponse: 'data' }));

    return communicateWithOpenAI('Mensaje de prueba', 'identificador', 'claveAPI')
      .then(response => {

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


        expect(response).toEqual({ exampleResponse: 'data' });
      });
  });

  it('debería manejar errores de red correctamente', () => {

    fetchMock.mockRejectOnce(new Error('Failed to fetch'));


    return expect(communicateWithOpenAI('Mensaje de prueba', 'identificador', 'claveAPI')).rejects.toThrow('Failed to fetch');
  });

  it('debería lanzar un error si la solicitud no es exitosa', () => {

    fetchMock.mockResponseOnce(JSON.stringify({}), { status: 404, statusText: 'Not Found' });


    return expect(communicateWithOpenAI('Mensaje de prueba', 'identificador', 'claveAPI')).rejects.toThrow('Error en la solicitud: 404');
  });
});

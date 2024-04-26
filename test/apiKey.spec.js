// test/apiKey.spec.js

import { apiKey } from '../config.js';
import { getApiKey, setApiKey } from '../src/lib/apiKey.js';

describe('setApiKey', () => {

  it('debería establecer correctamente la API Key', () => {
    // Desarrolla el test correspondiente aquí
    //ejecucion
    setApiKey(apiKey);
    const obtainedApiKey = localStorage.getItem('apiKey');
    //afirmaciones
    expect(obtainedApiKey).toEqual(apiKey);
  });
});

describe('getApiKey', () => {

  it('debería devolver el valor de la API Key', () => {
    // Desarrolla el test correspondiente aquí
    //Ejecucion
    const obtainedApiKey = getApiKey();
    //afirmaciones 
    expect(obtainedApiKey).toEqual(apiKey);
  });
});
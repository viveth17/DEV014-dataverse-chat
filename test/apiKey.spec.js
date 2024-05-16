// test/apiKey.spec.js

import { apiKey } from '../config.js';
import { getApiKey, setApiKey } from '../src/lib/apiKey.js';

describe('setApiKey', () => {

  it('debería establecer correctamente la API Key', () => {
    setApiKey(apiKey);
    const obtainedApiKey = localStorage.getItem('apiKey');
    expect(obtainedApiKey).toEqual(apiKey);
  });

  it('debería manejar el caso de clave API incorrecta', () => {
    const originalAlert = window.alert;
    let alertCalled = false;
    window.alert = (message) => {
      alertCalled = true;
      expect(message).toBe('Error: Clave API no válida.');
    };

    setApiKey('shortKey');


    expect(alertCalled).toBe(true);


    window.alert = originalAlert;
  });
});

describe('getApiKey', () => {

  it('debería devolver el valor de la API Key', () => {

    const obtainedApiKey = getApiKey();

    expect(obtainedApiKey).toEqual(apiKey);
  });
});
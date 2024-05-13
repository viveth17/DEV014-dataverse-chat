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

  it('debería manejar el caso de clave API incorrecta', () => {
    // Guardar el estado actual de la función alert
    const originalAlert = window.alert;
    // Variable para verificar si alert fue llamado
    let alertCalled = false;
    // Sobrescribir la función alert
    window.alert = (message) => {
      alertCalled = true;
      // Verificar si el mensaje es el esperado
      expect(message).toBe('Error: Clave API no válida.');
    };

    // Ejecutar la función con una clave incorrecta (que no cumple con la longitud mínima)
    setApiKey('shortKey'); // Por ejemplo, una clave con menos de 10 caracteres

    // Verificar si alert fue llamado
    expect(alertCalled).toBe(true);

    // Restaurar la función alert original
    window.alert = originalAlert;
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
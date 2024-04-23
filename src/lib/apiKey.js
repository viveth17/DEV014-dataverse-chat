export const getApiKey = () => {
  // Implementa el código para obtener la API KEY desde Local Storage
  const apiKey = localStorage.getItem('apiKey');
  return apiKey;

};
 
export const setApiKey = (key) => {
  // Implementa el código para guardar la API KEY en Local Storage
  if (isValidApiKey(key)){
    // Guardar la API KEY en Local Storage
    localStorage.setItem('apiKey', key);
    console.log('API KEY guardada correctamente.');
  } else {
    // Manejar el caso de clave incorrecta
    alert('Error: Clave API no válida.')
    console.error('Error: Clave API no válida.');
  }
};
const isValidApiKey = (key) => {
  // Aquí puedes implementar tu lógica para verificar si la clave es válida
  // Por ejemplo, verificar la longitud mínima, si contiene ciertos caracteres, etc.
  return key.length >= 10; // Ejemplo de verificación mínima de longitud
};

export const getApiKey = () => {
  const apiKey = localStorage.getItem('apiKey');
  return apiKey;

};
 
export const setApiKey = (key) => {
  if (isValidApiKey(key)){
    localStorage.setItem('apiKey', key);
  } else {
    alert('Error: Clave API no válida.')
  }
};
const isValidApiKey = (key) => {
  return key.length >= 10; 
};

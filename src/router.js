let ROUTES = {};
let rootEl;
export { setRootEl, renderView, onURLChange, setRoutes };

function setRootEl(el) {
  rootEl = el;
}
function setRoutes (routes){
  ROUTES = routes;
}
function renderView(view) {
  rootEl.innerHTML = '';
  rootEl.appendChild(view());
}
function onURLChange(callback) {
  window.addEventListener('popstate', callback);
}
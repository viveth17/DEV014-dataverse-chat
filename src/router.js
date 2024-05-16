
let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  rootEl = el;
}

export const setRoutes = (routes) => {
  if (typeof routes !== "object") {
    throw new Error("This is not an object");
  }
  if (!routes["/error"]) {
    throw new Error(
      "Routes must define an /error route with a function handler"
    );
  }
  ROUTES = routes;
}

const queryStringToObject = (queryString) => {
  const urlParams = new URLSearchParams(queryString);

  const objectParams = Object.fromEntries(urlParams);


  return objectParams;
}

const renderView = (pathname, props={}) => {
 
  rootEl.innerHTML = '';

  const view = ROUTES[pathname] || ROUTES["/error"];
  
  const viewWithProps = view(props);
 
  rootEl.appendChild(viewWithProps);
} 

export const navigateTo = (pathname, props={}) => {
  
  const pageUrl = pathname + '?' +  new URLSearchParams(props);
  history.pushState({}, "", pageUrl);

  renderView(location.pathname, props)
}

export const onURLChange = (location) => {
  const {search} = location;
  queryStringToObject (search);
  
  const paramsToObject = queryStringToObject(location.search)

  renderView(location.pathname, paramsToObject)
}
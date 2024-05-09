
let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  // assign rootEl
  rootEl = el;
}

export const setRoutes = (routes) => {
  // if (typeof routes !== "object") {
  //   throw new Error("This is not an object");
  // }
  // if (!routes["/error"]) {
  //   throw new Error(
  //     "Routes must define an /error route with a function handler"
  //   );
  // }
  ROUTES = routes;
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  // assign ROUTES
}

const queryStringToObject = (queryString) => {
  // convert query string to URLSearchParams 
  const urlParams = new URLSearchParams(queryString);

  // convert URLSearchParams to an object
  const objectParams = Object.fromEntries(urlParams);

  // return the object
  return objectParams;
}

const renderView = (pathname, props={}) => {
  // clear the root element
  rootEl.innerHTML = '';
  // find the correct view in ROUTES for the pathname
  const view = ROUTES[pathname] || ROUTES["/error"];
  // in case not found render the error view
  // render the correct view passing the value of props
  const viewWithProps = view(props);
  // add the view element to the DOM root element
  rootEl.appendChild(viewWithProps);
} 

export const navigateTo = (pathname, props={}) => {
  // update window history with pushState
  const pageUrl = pathname + '?' +  new URLSearchParams(props);
  history.pushState({}, "", pageUrl);
  // render the view with the pathname and props
  renderView(location.pathname, props)
}

export const onURLChange = (location) => {
  const {search} = location;
  queryStringToObject (search);
  // parse the location for the pathname and search params
  // convert the search params to an object
  const paramsToObject = queryStringToObject(location.search)
  // render the view with the pathname and object
  renderView(location.pathname, paramsToObject)
}
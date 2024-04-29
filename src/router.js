
let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  // assign rootEl
  rootEl = el;
}

export const setRoutes = (routes) => {
  ROUTES = routes;
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  // assign ROUTES
}

const queryStringToObject = (queryString) => {
  const searchUrlParams = new URLSearchParams(queryString);
  return Object.fromEntries(searchUrlParams.entries());
}

const renderView = (pathname, props={}) => {
  rootEl.innerHTML ="";
  const view = ROUTES[pathname] || ROUTES["/error"];
  const viewElement = view(props);

  // console.log('view:', view); 

  rootEl.appendChild(viewElement);


  // clear the root element
  // find the correct view in ROUTES for the pathname
  // in case not found render the error view
  // render the correct view passing the value of props
  // add the view element to the DOM root element
} 

export const navigateTo = (pathname, props={}) => {
  const searchUrlParams = new URLSearchParams(props);
  window.history.pushState(props, "",(window.location.oringi + pathname + '?' + searchUrlParams ))
  renderView(pathname, props);

//   // update window history with pushState
//   // render the view with the pathname and props
}

export const onURLChange = (location) => {
  const {pathname, search} = location;
  const searchParams = queryStringToObject (search)
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
  renderView(pathname, searchParams);
}
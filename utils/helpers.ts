const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
};

const findRouteKey = ({ routes, routeName }) => {
  let key = null;
  const routeObj = routes.find((r) => r.routeName === routeName);

  if (routeObj) {
    key = { key: routeObj.key };
  }

  return key;
};

export { slugify, findRouteKey };

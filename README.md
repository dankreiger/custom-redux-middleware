### Small middleware examples

[![Build Status](https://travis-ci.org/dankreiger/custom-redux-middleware.svg?branch=master)](https://travis-ci.org/dankreiger/custom-redux-middleware)

Middleware format is:

```js
/* ES5 */
var customMiddleware = function(_ref) {
  var dispatch = _ref.dispatch,
      getState = _ref.getState;

  /* next is a reference to the next middleware in line */
  return function(next) {
    return function(action) {
      // middleware goes here
    };
  };
}

module.exports = customMiddleware;


/* ES6 */
export default ({ dispatch, getState }) => next => action {
  // middleware goes here
}
```

### Repo also includes a redux integration test example

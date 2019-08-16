### Small middleware examples

[![Build Status](https://travis-ci.org/dankreiger/custom-redux-middleware.svg?branch=master)](https://travis-ci.org/dankreiger/custom-redux-middleware)

Middleware format is:

```js
/* ES5 */
export default function({ dispatch, getState }) {
  /* next is a reference to the next middleware in line */
  return function(next) {
    return function(action) {
      // middleware goes here
    };
  };
}


/* ES6 */
export default ({ dispatch, getState }) => next => action {
  // middleware goes here
}
```

### Repo also includes a redux integration test example

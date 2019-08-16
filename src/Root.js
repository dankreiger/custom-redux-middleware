import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter, HashRouter } from 'react-router-dom';

const isProd = process.env.NODE_ENV === 'production';

export default ({ children }) => {
  const hocArgs = isProd
    ? [HashRouter, children, { basename: '/' }]
    : [BrowserRouter, children];

  return <Provider store={store}>{rootHoc(...hocArgs)}</Provider>;
};

function rootHoc(ChildComponent, children, props = {}) {
  return <ChildComponent {...props}>{children}</ChildComponent>;
}

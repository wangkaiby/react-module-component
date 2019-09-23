import React from 'react';
// import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import Layout from './layout';

import Routers from './router';

import './index.css';

const Root = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Layout>
        <Routers />
      </Layout>
    </Provider>
  </BrowserRouter>
);
export default Root;

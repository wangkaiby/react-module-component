import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import Layout from './layout';

import Routers from './router/micro';
import 'antd/dist/antd.css'

const Roots = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Layout>
        <Routers />
      </Layout>
    </Provider>
  </BrowserRouter>
);
ReactDOM.render(
  <Roots />,
  document.getElementById('root')
);

